import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class Sonarr implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Sonarr',
        name: 'sonarr',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        description: 'Interact with a Sonarr API',
        defaults: {
            name: 'Sonarr',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'apiKey',
                required: false,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: 'https://localhost:8989',
        },
        properties: properties,
    };
}
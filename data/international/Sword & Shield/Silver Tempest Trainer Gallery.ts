import { Set } from 'models/database/set'
import serie from '../Sword & Shield'

const swsh12tg: Set = {
	id: "swsh12tg",

	name: {
		'en-us': "Silver Tempest Trainer Gallery",
		'fr-fr': "Tempête Argentée Galerie de Dresseurs",
		'es-es': "Tempestad Plateada Galería de Entrenador",
		'it-it': "Tempesta Argentata Galleria Allenatori",
		'de-de': "Silberne Sturmwinde Trainer-Galerie",
		'pt-br': "Tempestade Prateada Galeria de Treinador"
	},

	tcgOnline: 'SIT',
	serie: serie,

	cardCount: {
		official: 30
	},

	releaseDate: "2022-11-11",

	abbreviations: {
		official: "SIT:TG"
	}
}

export default swsh12tg

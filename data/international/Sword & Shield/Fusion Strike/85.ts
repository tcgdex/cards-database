import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [873],
	set: Set,

	name: {
		'en-us': "Frosmoth",
		'fr-fr': "Beldeneige",
		'es-es': "Frosmoth",
		'it-it': "Frosmoth",
		'pt-br': "Frosmoth",
		'de-de': "Mottineva"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'es-es': "Snom",
		'it-it': "Snom",
		'pt-br': "Snom",
		'de-de': "Snomnom"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "chibi",

	description: {
		'en-us': "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Icy Wind",
			'fr-fr': "Vent Glace",
			'de-de': "Eissturm",
			'es-es': "Viento Hielo",
			'pt-br': "Vento Congelante",
			'it-it': "Ventogelato"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Blizzard Loop",
			'fr-fr': "Boucle Blizzard",
			'de-de': "Blizzardschleife",
			'es-es': "Bucle Ventisca",
			'pt-br': "Nevasca em Loop",
			'it-it': "Circuito Bora"
		},

		damage: 160,

		effect: {
			'en-us': "Put all Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main toutes les Énergies attachées à ce Pokémon.",
			'de-de': "Nimm alle an dieses Pokémon angelegten Energien auf deine Hand.",
			'es-es': "Pon todas las Energías unidas a este Pokémon en tu mano.",
			'pt-br': "Coloque todas as Energias ligadas a este Pokémon na sua mão.",
			'it-it': "Prendi tutte le Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582219,
				tcgplayer: 253240
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582219,
				tcgplayer: 253240
			}
		},
	],
}

export default card

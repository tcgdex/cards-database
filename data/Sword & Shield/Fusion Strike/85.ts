import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [873],
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		it: "Frosmoth",
		pt: "Frosmoth",
		de: "Mottineva"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "chibi",

	description: {
		en: "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
			de: "Eissturm",
			es: "Viento Hielo",
			pt: "Vento Congelante",
			it: "Ventogelato"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Blizzard Loop",
			fr: "Boucle Blizzard",
			de: "Blizzardschleife",
			es: "Bucle Ventisca",
			pt: "Nevasca em Loop",
			it: "Circuito Bora"
		},

		damage: 160,

		effect: {
			en: "Put all Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main toutes les Énergies attachées à ce Pokémon.",
			de: "Nimm alle an dieses Pokémon angelegten Energien auf deine Hand.",
			es: "Pon todas las Energías unidas a este Pokémon en tu mano.",
			pt: "Coloque todas as Energias ligadas a este Pokémon na sua mão.",
			it: "Prendi tutte le Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582219
	}
}

export default card
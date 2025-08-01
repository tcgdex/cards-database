import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Underground Work",
				fr: "Travail Souterrain",
				es: "Trabajo Subterráneo",
				it: "Lavoro Sotterraneo",
				pt: "Obra Subterrânea",
				de: "Untergrundarbeiten"
			},
			effect: {
				en: "If you discard this Pokémon with the effect of Giovanni’s Exile, discard the top card of your opponent’s deck.",
				fr: "Si vous défaussez ce Pokémon du fait de l’effet d’Exil de Giovanni, défaussez la carte du dessus du deck de votre adversaire.",
				es: "Si descartas este Pokémon con el efecto de la carta Exilio de Giovanni, descarta la primera carta de la baraja de tu rival.",
				it: "Se scarti questo Pokémon per effetto di Esilio di Giovanni, scarta la prima carta del mazzo del tuo avversario.",
				pt: "Se você descartar este Pokémon com o efeito de Exílio do Giovanni, descarte a primeira carta do baralho do seu oponente.",
				de: "Wenn du dieses Pokémon mit dem Effekt von Giovannis Exil auf deinen Ablagestapel legst, lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Hook",
				fr: "Crochet",
				es: "Garfio",
				it: "Uncino",
				pt: "Gancho",
				de: "Haken"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372376
	}
}

export default card

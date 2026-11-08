import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'fr-fr': "Gorythmic",
		'en-us': "Rillaboom",
		'es-es': "Rillaboom",
		'it-it': "Rillaboom",
		'pt-br': "Rillaboom",
		'de-de': "Gortrom"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Badabouin",
		'en-us': "Thwackey"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Rythme Voltaïque",
			'en-us': "Voltage Beat",
			'es-es': "Ritmo Voltaje",
			'it-it': "Battuta Folgorante",
			'pt-br': "Ritmo Voltaico",
			'de-de': "Blitztrommeln"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Grass, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'en-us': "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Energía Grass y unirlas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Energia Grass e assegnarle a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por até 2 cartas de Energia Grass no seu baralho e ligá-las a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach bis zu 2 Grass-Energiekarten durchsuchen und sie an 1 deiner Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Enfoncement",
			'en-us': "Hammer In",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 140,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage2",

	description: {
		'en-us': "By drumming, it taps into the power of its special tree stump. The roots of the stump follow its direction in battle."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539418,
				tcgplayer: 232350
			}
		},
	],
}

export default card

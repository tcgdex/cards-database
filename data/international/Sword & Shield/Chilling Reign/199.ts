import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		'en-us': "Celebi VMAX",
		'fr-fr': "Celebi VMAX",
		'es-es': "Celebi VMAX",
		'it-it': "Celebi VMAX",
		'pt-br': "Celebi VMAX",
		'de-de': "Celebi VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Curative Forest",
			'fr-fr': "Forêt Curative",
			'es-es': "Bosque Curativo",
			'it-it': "Curaforesta",
			'pt-br': "Floresta Curadora",
			'de-de': "Heilender Wald"
		},

		effect: {
			'en-us': "Once during your turn, you may heal 20 damage from each of your Grass Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon Grass.",
			'es-es': "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon Grass.",
			'it-it': "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon Grass da 20 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon Grass.",
			'de-de': "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Grass-Pokémon heilen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Max Plant",
			'fr-fr': "Végétomax",
			'es-es': "Maxiplanta",
			'it-it': "Dynapianta",
			'pt-br': "Planta Max",
			'de-de': "Dyna-Pflanze"
		},

		damage: 130,

		effect: {
			'en-us': "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,


	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	evolveFrom: {
		'en-us': "Celebi V",
		'fr-fr': "Celebi-V",
		'es-es': "Celebi V",
		'it-it': "Celebi-V",
		'pt-br': "Celebi V",
		'de-de': "Celebi-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 567307,
				tcgplayer: 241657
			}
		},
	],
}

export default card

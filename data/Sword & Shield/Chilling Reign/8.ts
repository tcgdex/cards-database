import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Celebi VMAX",
		fr: "Celebi VMAX",
		es: "Celebi VMAX",
		it: "Celebi VMAX",
		pt: "Celebi VMAX",
		de: "Celebi VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		en: "Celebi V",
		fr: "Celebi-V",
		es: "Celebi V",
		it: "Celebi-V",
		pt: "Celebi V",
		de: "Celebi-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Curative Forest",
			fr: "Forêt Curative",
			es: "Bosque Curativo",
			it: "Curaforesta",
			pt: "Floresta Curadora",
			de: "Heilender Wald"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Grass Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez soigner 20 dégâts de chacun de vos Pokémon Grass.",
			es: "Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon Grass.",
			it: "Una sola volta durante il tuo turno, puoi curare ciascuno dei tuoi Pokémon Grass da 20 danni.",
			pt: "Uma vez durante o seu turno, você poderá curar 20 pontos de dano de cada um dos seus Pokémon Grass.",
			de: "Einmal während deines Zuges kannst du 20 Schadenspunkte bei jedem deiner Grass-Pokémon heilen."
		}
	}],

	attacks: [{
		name: {
			en: "Max Plant",
			fr: "Végétomax",
			es: "Maxiplanta",
			it: "Dynapianta",
			pt: "Planta Max",
			de: "Dyna-Pflanze"
		},

		effect: {
			en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		damage: 130,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

}

export default card

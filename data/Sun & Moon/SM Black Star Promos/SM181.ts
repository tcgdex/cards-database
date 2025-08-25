import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [809],
	set: Set,

	name: {
		en: "Melmetal",
		fr: "Melmetal",
		es: "Melmetal",
		it: "Melmetal",
		pt: "Melmetal",
		de: "Melmetal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Eater",
			fr: "Mange Métal",
			es: "Devorametales",
			it: "Mangiametallo",
			pt: "Devorador de Metal",
			de: "Metallesser"
		},

		effect: {
			en: "Once during your turn (before your attack), you may discard a Metal Pokémon from your hand. If you do, heal 100 damage from this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Pokémon Metal de votre main. Dans ce cas, soignez 100 dégâts à ce Pokémon.",
			es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 Pokémon Metal de tu mano. Si lo haces, cura 100 puntos de daño a este Pokémon.",
			it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare un Pokémon Metal che hai in mano. Se lo fai, cura questo Pokémon da 100 danni.",
			pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 Pokémon Metal da sua mão. Se fizer isto, cure 100 pontos de dano deste Pokémon.",
			de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Metal-Pokémon aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, heile 100 Schadenspunkte bei diesem Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 130,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 4
}

export default card
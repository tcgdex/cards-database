import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Meganium ex",
		fr: "Méga-Méganium-ex",
		es: "Mega-Meganium ex",
		de: "Mega-Meganie-ex",
		it: "Mega Meganium-ex",
		pt: "Mega Meganium ex"
	},
	evolveFrom: {
		en: "Bayleef",
		de: "Lorblatt",
		es: "Bayleef",
		fr: "Macronium",
		it: "Bayleef",
		pt: "Bayleef",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 360,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [154],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Giant Bouquet",
			fr: "Bouquet Géant",
			es: "Ramo Gigante",
			de: "Gigantisches Bouquet",
			it: "Bouquet Gigante",
			pt: "Buquê Gigante"
		},

		effect: {
			en: "This attack does 50 more damage for each {G} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie {G} attachée à ce Pokémon.",
			es: "Este ataque hace 50 puntos de daño más por cada Energía {G} unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {G}-Energie 50 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 50 danni in più per ogni Energia {G} assegnata a questo Pokémon.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Energia {G} ligada a este Pokémon."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			size: "jumbo"
		}
	]
}

export default card

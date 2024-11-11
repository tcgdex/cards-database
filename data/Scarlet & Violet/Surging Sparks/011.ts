import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		es: "Zarude",
		it: "Zarude",
		pt: "Zarude",
		de: "Zarude"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leaf Drain",
			fr: "Feuille Sangsue",
			es: "Hoja Drenante",
			it: "Assorbifoglia",
			pt: "Dreno Folha",
			de: "Blattsauger"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Jungle Whip",
			fr: "Fouet Végétal",
			es: "Látigo Selvático",
			it: "Giunglafrusta",
			pt: "Chicote da Selva",
			de: "Dschungelpeitsche"
		},

		effect: {
			en: "You may put all Energy attached to this Pokémon into your hand to have this attack do 80 more damage.",
			fr: "Vous pouvez ajouter à votre main toutes les Énergies attachées à ce Pokémon pour que cette attaque inflige 80 dégâts supplémentaires.",
			es: "Puedes poner todas las Energías unidas a este Pokémon en tu mano para que este ataque haga 80 puntos de daño más.",
			it: "Puoi prendere tutte le Energie assegnate a questo Pokémon e aggiungerle alle carte che hai in mano per infliggere 80 danni in più con questo attacco.",
			pt: "Você pode colocar todas as Energias ligadas a este Pokémon na sua mão para fazer este ataque causar 80 pontos de dano a mais.",
			de: "Du kannst alle an dieses Pokémon angelegten Energien auf deine Hand nehmen, sodass diese Attacke 80 Schadenspunkte mehr zufügt."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
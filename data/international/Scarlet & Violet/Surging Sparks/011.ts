import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [893],
	set: Set,

	name: {
		'en-us': "Zarude",
		'fr-fr': "Zarude",
		'es-es': "Zarude",
		'it-it': "Zarude",
		'pt-br': "Zarude",
		'de-de': "Zarude"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Leaf Drain",
			'fr-fr': "Feuille Sangsue",
			'es-es': "Hoja Drenante",
			'it-it': "Assorbifoglia",
			'pt-br': "Dreno Folha",
			'de-de': "Blattsauger"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Jungle Whip",
			'fr-fr': "Fouet Végétal",
			'es-es': "Látigo Selvático",
			'it-it': "Giunglafrusta",
			'pt-br': "Chicote da Selva",
			'de-de': "Dschungelpeitsche"
		},

		effect: {
			'en-us': "You may put all Energy attached to this Pokémon into your hand to have this attack do 80 more damage.",
			'fr-fr': "Vous pouvez ajouter à votre main toutes les Énergies attachées à ce Pokémon pour que cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Puedes poner todas las Energías unidas a este Pokémon en tu mano para que este ataque haga 80 puntos de daño más.",
			'it-it': "Puoi prendere tutte le Energie assegnate a questo Pokémon e aggiungerle alle carte che hai in mano per infliggere 80 danni in più con questo attacco.",
			'pt-br': "Você pode colocar todas as Energias ligadas a este Pokémon na sua mão para fazer este ataque causar 80 pontos de dano a mais.",
			'de-de': "Du kannst alle an dieses Pokémon angelegten Energien auf deine Hand nehmen, sodass diese Attacke 80 Schadenspunkte mehr zufügt."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794266,
				tcgplayer: 590099
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794266,
				tcgplayer: 590099
			}
		},	
	],

	illustrator: "GOSSAN",
	
}

export default card

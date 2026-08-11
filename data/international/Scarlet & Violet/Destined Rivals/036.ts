import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		'en-us': "Ethan's Magcargo",
		'fr-fr': "Volcaropod de Luth",
		'de-de': "Klarins Magcargo",
		'it-it': "Magcargo di Armonio",
		'es-es': "Magcargo de Eco",
		'pt-br': "Magcargo do Ethan",
		'es-mx': "Magcargo de Ethan"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Ethan's Slugma",
		'fr-fr': "Limagma de Luth",
		'de-de': "Klarins Schneckmag",
		'it-it': "Slugma di Armonio",
		'es-es': "Slugma de Eco",
		'pt-br': "Slugma do Ethan",
		'es-mx': "Slugma de Ethan"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Melt Away",
			'fr-fr': "Fonte Progressive",
			'de-de': "Wegschmelzen",
			'it-it': "Squagliarsela",
			'es-es': "Fundir",
			'pt-br': "Chega Derrete",
			'es-mx': "Escape Fundido"
		},

		effect: {
			'en-us': "If this Pokémon has no Energy attached, it has no Retreat Cost.",
			'fr-fr': "Si aucune Énergie n'est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'de-de': "Wenn an dieses Pokémon keine Energie angelegt ist, hat es keine Rückzugskosten.",
			'it-it': "Se questo Pokémon non ha Energie assegnate, non ha costo di ritirata.",
			'es-es': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Coste de Retirada.",
			'pt-br': "Se este Pokémon não tiver nenhuma Energia ligada a ele, não terá custo de Recuo.",
			'es-mx': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Costo de Retirada."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'en-us': "Lava Burst",
			'fr-fr': "Explosion de Lave",
			'de-de': "Lava-Ausbruch",
			'it-it': "Lavascoppio",
			'es-es': "Explosión de Lava",
			'pt-br': "Erupção de Lava",
			'es-mx': "Estallido de Lava"
		},

		effect: {
			'en-us': "Discard up to 5 {R} Energy from this Pokémon. This attack does 70 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez jusqu'à 5 Énergies {R} de ce Pokémon. Cette attaque inflige 70 dégâts pour chaque carte défaussée de cette façon.",
			'de-de': "Lege bis zu 5 {R}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte zu.",
			'it-it': "Scarta fino a cinque Energie {R} da questo Pokémon. Questo attacco infligge 70 danni per ogni carta che hai scartato in questo modo.",
			'es-es': "Descarta hasta 5 Energías {R} de este Pokémon. Este ataque hace 70 puntos de daño por cada carta que hayas descartado de esta manera.",
			'pt-br': "Descarte até 5 Energias {R} deste Pokémon. Este ataque causa 70 pontos de dano para cada carta descartada desta forma.",
			'es-mx': "Descarta hasta 5 Energías {R} de este Pokémon. Este ataque hace 70 puntos de daño por cada carta que descartaste de esta manera."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825910,
				tcgplayer: 630811
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825910,
				tcgplayer: 630811
			}
		},
	],
}

export default card

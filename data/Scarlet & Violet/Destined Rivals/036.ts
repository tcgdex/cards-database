import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [219],
	set: Set,

	name: {
		en: "Ethan's Magcargo",
		fr: "Volcaropod de Luth",
		de: "Klarins Magcargo",
		it: "Magcargo di Armonio",
		es: "Magcargo de Eco",
		pt: "Magcargo do Ethan",
		'es-mx': "Magcargo de Ethan"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Melt Away",
			fr: "Fonte Progressive",
			de: "Wegschmelzen",
			it: "Squagliarsela",
			es: "Fundir",
			pt: "Chega Derrete",
			'es-mx': "Escape Fundido"
		},

		effect: {
			en: "If this Pokémon has no Energy attached, it has no Retreat Cost.",
			fr: "Si aucune Énergie n'est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			de: "Wenn an dieses Pokémon keine Energie angelegt ist, hat es keine Rückzugskosten.",
			it: "Se questo Pokémon non ha Energie assegnate, non ha costo di ritirata.",
			es: "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Coste de Retirada.",
			pt: "Se este Pokémon não tiver nenhuma Energia ligada a ele, não terá custo de Recuo.",
			'es-mx': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Costo de Retirada."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Lava Burst",
			fr: "Explosion de Lave",
			de: "Lava-Ausbruch",
			it: "Lavascoppio",
			es: "Explosión de Lava",
			pt: "Erupção de Lava",
			'es-mx': "Estallido de Lava"
		},

		effect: {
			en: "Discard up to 5 {R} Energy from this Pokémon. This attack does 70 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 5 Énergies {R} de ce Pokémon. Cette attaque inflige 70 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege bis zu 5 {R}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte zu.",
			it: "Scarta fino a cinque Energie {R} da questo Pokémon. Questo attacco infligge 70 danni per ogni carta che hai scartato in questo modo.",
			es: "Descarta hasta 5 Energías {R} de este Pokémon. Este ataque hace 70 puntos de daño por cada carta que hayas descartado de esta manera.",
			pt: "Descarte até 5 Energias {R} deste Pokémon. Este ataque causa 70 pontos de dano para cada carta descartada desta forma.",
			'es-mx': "Descarta hasta 5 Energías {R} de este Pokémon. Este ataque hace 70 puntos de daño por cada carta que descartaste de esta manera."
		},

		damage: "70×"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	],

	thirdParty: {
		cardmarket: 825910
	}
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [219],

	name: {
		en: "Ethan's Magcargo",
		fr: "Volcaropod de Luth",
		es: "Magcargo de Eco",
		'es-mx': "Magcargo de Ethan",
		de: "Klarins Magcargo",
		it: "Magcargo di Armonio",
		pt: "Magcargo do Ethan"
	},

	illustrator: "kodama",
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
			es: "Fundir",
			'es-mx': "Escape Fundido",
			de: "Wegschmelzen",
			it: "Squagliarsela",
			pt: "Chega Derrete"
		},

		effect: {
			en: "If this Pokémon has no Energy attached, it has no Retreat Cost.",
			fr: "Si aucune Énergie n'est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			es: "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Coste de Retirada.",
			'es-mx': "Si este Pokémon no tiene ninguna Energía unida, no tiene ningún Costo de Retirada.",
			de: "Wenn an dieses Pokémon keine Energie angelegt ist, hat es keine Rückzugskosten.",
			it: "Se questo Pokémon non ha Energie assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon não tiver nenhuma Energia ligada a ele, não terá custo de Recuo."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Lava Burst",
			fr: "Explosion de Lave",
			es: "Explosión de Lava",
			'es-mx': "Estallido de Lava",
			de: "Lava-Ausbruch",
			it: "Lavascoppio",
			pt: "Erupção de Lava"
		},

		effect: {
			en: "Discard up to 5 {R} Energy from this Pokémon. This attack does 70 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 5 Énergies {R} de ce Pokémon. Cette attaque inflige 70 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta hasta 5 Energías {R} de este Pokémon. Este ataque hace 70 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta hasta 5 Energías {R} de este Pokémon. Este ataque hace 70 puntos de daño por cada carta que descartaste de esta manera.",
			de: "Lege bis zu 5 {R}-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte zu.",
			it: "Scarta fino a cinque Energie {R} da questo Pokémon. Questo attacco infligge 70 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 5 Energias {R} deste Pokémon. Este ataque causa 70 pontos de dano para cada carta descartada desta forma."
		},

		damage: "70×"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675836,
		cardmarket: 869635
	}
}

export default card
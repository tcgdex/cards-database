import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1024],
	set: Set,

	name: {
		en: "Terapagos ex",
		fr: "Terapagos-ex",
		es: "Terapagos ex",
		it: "Terapagos-ex",
		pt: "Terapagos ex",
		de: "Terapagos-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Unified Beatdown",
			fr: "Dérouillée Groupée",
			es: "Golpe Unísono",
			it: "Batosta all'Unisono",
			pt: "Abater Unificado",
			de: "Vereinter Niederprügler"
		},

		effect: {
			en: "If you go second, you can't use this attack during your first turn. This attack does 30 damage for each of your Benched Pokémon.",
			fr: "Si vous jouez en second, vous ne pouvez pas utiliser cette attaque pendant votre premier tour. Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc.",
			es: "Si sales en segundo lugar, no puedes usar este ataque durante tu primer turno. Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
			it: "Se inizi per secondo, non puoi usare questo attacco durante il tuo primo turno. Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina.",
			pt: "Se você for o segundo a jogar, você não poderá usar este ataque durante o seu primeiro turno. Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco.",
			de: "Wenn du als Zweiter am Zug bist, kannst du diese Attacke während deines ersten Zuges nicht einsetzen. Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Grass", "Water", "Lightning"],

		name: {
			en: "Crown Opal",
			fr: "Couronne Opale",
			es: "Ópalo Corona",
			it: "Opale della Corona",
			pt: "Coroa de Opalas",
			de: "Kronen-Opal"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic non-{C} Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon non-{C} de base.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon no {C} Básicos.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base non di tipo {C}.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos que não sejam de tipo {C}.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon, die keine {C}-Pokémon sind, zugefügt wird."
		},

		damage: 180
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "5ban Graphics"
}

export default card
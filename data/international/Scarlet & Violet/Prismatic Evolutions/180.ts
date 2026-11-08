import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1024],
	set: Set,

	name: {
		'en-us': "Terapagos ex",
		'fr-fr': "Terapagos-ex",
		'es-es': "Terapagos ex",
		'pt-br': "Terapagos ex",
		'it-it': "Terapagos-ex",
		'de-de': "Terapagos-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Unified Beatdown",
			'fr-fr': "Dérouillée Groupée",
			'es-es': "Golpe Unísono",
			'pt-br': "Abater Unificado",
			'it-it': "Batosta all'Unisono",
			'de-de': "Vereinter Niederprügler"
		},

		effect: {
			'en-us': "If you go second, you can't use this attack during your first turn. This attack does 30 damage for each of your Benched Pokémon.",
			'fr-fr': "Si vous jouez en second, vous ne pouvez pas utiliser cette attaque pendant votre premier tour. Cette attaque inflige 30 dégâts pour chacun de vos Pokémon de Banc.",
			'es-es': "Si sales en segundo lugar, no puedes usar este ataque durante tu primer turno. Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.",
			'pt-br': "Se você for o segundo a jogar, você não poderá usar este ataque durante o seu primeiro turno. Este ataque causa 30 pontos de dano para cada um dos seus Pokémon no Banco.",
			'it-it': "Se inizi per secondo, non puoi usare questo attacco durante il tuo primo turno. Questo attacco infligge 30 danni per ogni Pokémon nella tua panchina.",
			'de-de': "Wenn du als Zweiter am Zug bist, kannst du diese Attacke während deines ersten Zuges nicht einsetzen. Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Grass", "Water", "Lightning"],

		name: {
			'en-us': "Crown Opal",
			'fr-fr': "Couronne Opale",
			'es-es': "Ópalo Corona",
			'pt-br': "Coroa de Opalas",
			'it-it': "Opale della Corona",
			'de-de': "Kronen-Opal"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic non-{C} Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon non-{C} de base.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon no {C} Básicos.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos que não sejam de tipo {C}.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base non di tipo {C}.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon, die keine {C}-Pokémon sind, zugefügt wird."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "5ban Graphics",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 805574,
				tcgplayer: 610535
			}
		},
	],
}

export default card

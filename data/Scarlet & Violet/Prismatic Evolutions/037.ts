import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [477],
	set: Set,

	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		pt: "Dusknoir",
		it: "Dusknoir",
		de: "Zwirrfinst"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cursed Blast",
			fr: "Explosion Maudite",
			es: "Estallido Maldito",
			pt: "Explosão Maldita",
			it: "Esplosione Maledetta",
			de: "Verfluchte Explosion"
		},

		effect: {
			en: "Once during your turn, you may put 13 damage counters on 1 of your opponent's Pokémon. If you use this Ability, this Pokémon is Knocked Out.",
			fr: "Une fois pendant votre tour, vous pouvez placer 13 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous utilisez ce talent, ce Pokémon est mis K.O.",
			es: "Una vez durante tu turno, puedes poner 13 contadores de daño en uno de los Pokémon de tu rival. Si usas esta habilidad, este Pokémon queda Fuera de Combate.",
			pt: "Uma vez durante o seu turno, você poderá colocar 13 contadores de dano em 1 dos Pokémon do seu oponente. Se você usar esta Habilidade, este Pokémon será Nocauteado.",
			it: "Una sola volta durante il tuo turno, puoi mettere 13 segnalini danno su uno dei Pokémon del tuo avversario. Se usi questa abilità, questo Pokémon viene messo KO.",
			de: "Einmal während deines Zuges kannst du 13 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du diese Fähigkeit einsetzt, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Shadow Bind",
			fr: "Étreinte d'Ombre",
			es: "Atadura Sombría",
			pt: "Aprisionamento Sombrio",
			it: "Legami d'Ombra",
			de: "Schattenbindung"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "danciao",

	thirdParty: {
		cardmarket: 805426
	}
}

export default card
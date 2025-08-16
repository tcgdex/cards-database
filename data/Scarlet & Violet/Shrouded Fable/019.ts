import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [356],
	set: Set,

	name: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cursed Blast",
			fr: "Explosion Maudite",
			es: "Estallido Maldito",
			it: "Esplosione Maledetta",
			pt: "Explosão Maldita",
			de: "Verfluchte Explosion"
		},

		effect: {
			en: "Once during your turn, you may put 5 damage counters on 1 of your opponent's Pokémon. If you use this Ability, this Pokémon is Knocked Out.",
			fr: "Une fois pendant votre tour, vous pouvez placer 5 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous utilisez ce talent, ce Pokémon est mis K.O.",
			es: "Una vez durante tu turno, puedes poner 5 contadores de daño en uno de los Pokémon de tu rival. Si usas esta habilidad, este Pokémon queda Fuera de Combate.",
			it: "Una sola volta durante il tuo turno, puoi mettere cinque segnalini danno su uno dei Pokémon del tuo avversario. Se usi questa abilità, questo Pokémon viene messo KO.",
			pt: "Uma vez durante o seu turno, você poderá colocar 5 contadores de dano em 1 dos Pokémon do seu oponente. Se você usar esta Habilidade, este Pokémon será Nocauteado.",
			de: "Einmal während deines Zuges kannst du 5 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du diese Fähigkeit einsetzt, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo",
			de: "Irrlicht"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Aya Kusube"
}

export default card

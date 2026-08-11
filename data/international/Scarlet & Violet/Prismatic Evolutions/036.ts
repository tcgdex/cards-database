import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [356],
	set: Set,

	name: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'pt-br': "Dusclops",
		'it-it': "Dusclops",
		'de-de': "Zwirrklop"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'pt-br': "Duskull",
		'it-it': "Duskull",
		'de-de': "Zwirrlicht"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cursed Blast",
			'fr-fr': "Explosion Maudite",
			'es-es': "Estallido Maldito",
			'pt-br': "Explosão Maldita",
			'it-it': "Esplosione Maledetta",
			'de-de': "Verfluchte Explosion"
		},

		effect: {
			'en-us': "Once during your turn, you may put 5 damage counters on 1 of your opponent's Pokémon. If you use this Ability, this Pokémon is Knocked Out.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 5 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous utilisez ce talent, ce Pokémon est mis K.O.",
			'es-es': "Una vez durante tu turno, puedes poner 5 contadores de daño en uno de los Pokémon de tu rival. Si usas esta habilidad, este Pokémon queda Fuera de Combate.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 5 contadores de dano em 1 dos Pokémon do seu oponente. Se você usar esta Habilidade, este Pokémon será Nocauteado.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere cinque segnalini danno su uno dei Pokémon del tuo avversario. Se usi questa abilità, questo Pokémon viene messo KO.",
			'de-de': "Einmal während deines Zuges kannst du 5 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du diese Fähigkeit einsetzt, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'pt-br': "Fogo Fátuo",
			'it-it': "Fuocofatuo",
			'de-de': "Irrlicht"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Aya Kusube",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805425,
				tcgplayer: 610391
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805425,
				tcgplayer: 610391
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806452,
				tcgplayer: 610559
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806453,
				tcgplayer: 610660
			}
		},
	],
}

export default card

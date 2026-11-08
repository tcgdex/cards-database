import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [477],
	set: Set,

	name: {
		'en-us': "Dusknoir",
		'fr-fr': "Noctunoir",
		'es-es': "Dusknoir",
		'it-it': "Dusknoir",
		'pt-br': "Dusknoir",
		'de-de': "Zwirrfinst"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
		'es-es': "Dusclops",
		'it-it': "Dusclops",
		'pt-br': "Dusclops",
		'de-de': "Zwirrklop"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cursed Blast",
			'fr-fr': "Explosion Maudite",
			'es-es': "Estallido Maldito",
			'it-it': "Esplosione Maledetta",
			'pt-br': "Explosão Maldita",
			'de-de': "Verfluchte Explosion"
		},

		effect: {
			'en-us': "Once during your turn, you may put 13 damage counters on 1 of your opponent's Pokémon. If you use this Ability, this Pokémon is Knocked Out.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez placer 13 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous utilisez ce talent, ce Pokémon est mis K.O.",
			'es-es': "Una vez durante tu turno, puedes poner 13 contadores de daño en uno de los Pokémon de tu rival. Si usas esta habilidad, este Pokémon queda Fuera de Combate.",
			'it-it': "Una sola volta durante il tuo turno, puoi mettere 13 segnalini danno su uno dei Pokémon del tuo avversario. Se usi questa abilità, questo Pokémon viene messo KO.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar 13 contadores de dano em 1 dos Pokémon do seu oponente. Se você usar esta Habilidade, este Pokémon será Nocauteado.",
			'de-de': "Einmal während deines Zuges kannst du 13 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du diese Fähigkeit einsetzt, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Shadow Bind",
			'fr-fr': "Étreinte d'Ombre",
			'es-es': "Atadura Sombría",
			'it-it': "Legami d'Ombra",
			'pt-br': "Aprisionamento Sombrio",
			'de-de': "Schattenbindung"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 150
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
	retreat: 3,
	regulationMark: "H",


	illustrator: "James Turner",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780965,
				tcgplayer: 560381
			}
		},
	],
}

export default card

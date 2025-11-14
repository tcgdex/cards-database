import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Flygon",
		fr: "Libégon",
		es: "Flygon",
		'es-mx': "Flygon",
		de: "Libelldra",
		it: "Flygon",
		pt: "Flygon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sandy Flapping",
			fr: "Battements Sableux",
			es: "Aleteo Arenoso",
			'es-mx': "Aleteo Arenoso",
			de: "Sandschwingen",
			it: "Battito d'Ali Sabbioso",
			pt: "Asas Arenosas"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. You may also use this Ability if this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon. Discard the top 2 cards of your opponent's deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Vous pouvez également utiliser ce talent si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire. Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. También puedes usar esta habilidad si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival. Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. También puedes usar esta Habilidad si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival. Descarta las primeras 2 cartas del mazo de tu rival.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Du kannst diese Fähigkeit auch einsetzen, wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird. Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Puoi anche usare questa abilità se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario. Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Você também poderá usar esta Habilidade se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente. Descarte as 2 cartas de cima do baralho do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			'es-mx': "Viento Tajante",
			de: "Schneidender Wind",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card
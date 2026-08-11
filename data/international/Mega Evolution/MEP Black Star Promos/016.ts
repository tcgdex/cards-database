import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flygon",
		'fr-fr': "Libégon",
		'es-es': "Flygon",
		'es-mx': "Flygon",
		'de-de': "Libelldra",
		'it-it': "Flygon",
		'pt-br': "Flygon"
	},

	illustrator: "Oswaldo KATO",
  	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage2",
	dexId: [330],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava",
		'es-mx': "Vibrava"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sandy Flapping",
			'fr-fr': "Battements Sableux",
			'es-es': "Aleteo Arenoso",
			'es-mx': "Aleteo Arenoso",
			'de-de': "Sandschwingen",
			'it-it': "Battito d'Ali Sabbioso",
			'pt-br': "Asas Arenosas"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. You may also use this Ability if this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon. Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Vous pouvez également utiliser ce talent si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire. Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. También puedes usar esta habilidad si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival. Descarta las 2 primeras cartas de la baraja de tu rival.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. También puedes usar esta Habilidad si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival. Descarta las primeras 2 cartas del mazo de tu rival.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Du kannst diese Fähigkeit auch einsetzen, wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird. Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Puoi anche usare questa abilità se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario. Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Você também poderá usar esta Habilidade se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente. Descarte as 2 cartas de cima do baralho do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'es-mx': "Viento Tajante",
			'de-de': "Schneidender Wind",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante"
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

    variants: [
    	{
    		type: "holo",
    		stamp: ["set-logo"],
    		thirdParty: {
    			cardmarket: 857396,
    			tcgplayer: 663191
    		}
    	},
    	{
    		type: "holo",
    		stamp: ["set-logo","staff"],
    		thirdParty: {
    			cardmarket: 859016,
    			tcgplayer: 663192
    		}
    	},
    ],
}

export default card

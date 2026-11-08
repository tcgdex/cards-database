import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [956],
	set: Set,

	name: {
		'en-us': "Espathra",
		'fr-fr': "Cléopsytra",
		'es-es': "Espathra",
		'it-it': "Espathra",
		'pt-br': "Espathra",
		'de-de': "Psiopatra"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Flittle",
		'fr-fr': "Flotillon",
		'es-es': "Flittle",
		'it-it': "Flittle",
		'pt-br': "Flittle",
		'de-de': "Flattutu"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Stance",
			'fr-fr': "Position",
			'es-es': "Afirmación",
			'it-it': "In Guardia",
			'pt-br': "Em Posição",
			'de-de': "Abwehrhaltung"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon until the end of your opponent's next turn.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez éviter tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire jusqu'à la fin du prochain tour de votre adversaire.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes evitar todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon hasta el final del próximo turno de tu rival.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prevenire sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti a questo Pokémon fino alla fine del prossimo turno del tuo avversario.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá prevenir todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon até o final do próximo turno do seu oponente.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zum Ende des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die diesem Pokémon zugefügt werden, verhindern."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Glittering Eyes",
			'fr-fr': "Yeux Étincelants",
			'es-es': "Ojos Deslumbrantes",
			'it-it': "Occhi Sbrilluccicanti",
			'pt-br': "Olhos Cintilantes",
			'de-de': "Funkelnde Augen"
		},

		effect: {
			'en-us': "If Tulip is in your discard pile, this attack does 70 more damage.",
			'fr-fr': "Si Tully est dans votre pile de défausse, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si Tuli está en tu pila de descartes, este ataque hace 70 puntos de daño más.",
			'it-it': "Se Tulipa è nella tua pila degli scarti, questo attacco infligge 70 danni in più.",
			'pt-br': "Se Tulipa estiver na sua pilha de descarte, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn Tulia in deinem Ablagestapel ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "70+"
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It emits psychic power from the gaps between its multicolored frills and sprints at speeds greater than 120 mph.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740740,
				tcgplayer: 523878,
				cardtrader: 265529
			}
		},
	],

	illustrator: "AKIRA EGAWA",

	
}

export default card

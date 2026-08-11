import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [553],
	set: Set,

	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	illustrator: "Shiburingaru",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
		'de-de': "Rokkaiman"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Bully of the Sands",
			'fr-fr': "Tyran des Sables",
			'es-es': "Terror de las Arenas",
			'it-it': "Tiranno del Deserto",
			'pt-br': "Brutamonte das Areias",
			'de-de': "Tyrann der Wüste"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard a random card from your opponent's hand. If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, you may discard a random card from your opponent's hand.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez défausser au hasard une carte de la main de votre adversaire. Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, vous pouvez défausser au hasard une carte de la main de votre adversaire.",
			'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes descartar 1 carta aleatoria de la mano de tu rival. Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, puedes descartar 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scartare una carta a caso dalla mano del tuo avversario. Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco dell'avversario, puoi scartare una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá descartar 1 carta aleatória da mão do seu oponente. Se este Pokémon for o seu Pokémon Ativo e ele for Nocauteado pelo dano de um ataque do seu oponente, você poderá descartar 1 carta aleatória da mão do seu oponente.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel legen. Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, kannst du 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon is known as the Bully of the Sands. Krookodile's mighty jaws can bite through heavy plates of iron with almost no effort at all.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682160,
				tcgplayer: 451767
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682160,
				tcgplayer: 451767
			}
		},
	],
}

export default card

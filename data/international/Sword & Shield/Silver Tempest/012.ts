import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [591],
	set: Set,

	name: {
		'en-us': "Amoonguss",
		'fr-fr': "Gaulet",
		'es-es': "Amoonguss",
		'it-it': "Amoonguss",
		'pt-br': "Amoonguss",
		'de-de': "Hutsassa"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Surprise Spores",
			'fr-fr': "Spores Surprises",
			'es-es': "Esporas Sorpresa",
			'it-it': "Spore Burlone",
			'pt-br': "Esporos Surpresa",
			'de-de': "Überraschungssporen"
		},

		effect: {
			'en-us': "During your opponent's turn, if this Pokémon is discarded from your hand by an effect of an attack or Ability from your opponent's Pokémon, or by an effect of your opponent's Item or Supporter cards, discard your opponent's hand.",
			'fr-fr': "Pendant le tour de votre adversaire, si ce Pokémon est défaussé de votre main par l'effet d'une attaque ou d'un talent d'un Pokémon de votre adversaire, ou par l'effet d'une carte Objet ou Supporter de votre adversaire, votre adversaire défausse sa main.",
			'es-es': "Durante el turno de tu rival, si se descarta este Pokémon de tu mano por el efecto de un ataque o habilidad de los Pokémon de tu rival, o por el efecto de las cartas de Objeto o de Partidario de tu rival, descarta la mano de tu rival.",
			'it-it': "Durante il turno del tuo avversario, se questo Pokémon viene scartato dalla tua mano per effetto di un attacco o di un'abilità di un Pokémon del tuo avversario, o per effetto delle carte Strumento o carte Aiuto del tuo avversario, scarta le carte nella mano del tuo avversario.",
			'pt-br': "Durante o turno do seu oponente, se este Pokémon for descartado da sua mão pelos efeitos de um ataque ou Habilidade dos Pokémon do seu oponente, ou pelos efeitos de cartas de Item ou Apoiador do seu oponente, descarte a mão do seu oponente.",
			'de-de': "Wenn dieses Pokémon während des Zuges deines Gegners durch einen Effekt einer Attacke oder Fähigkeit von Pokémon deines Gegners oder durch einen Effekt von Item- oder Unterstützerkarten deines Gegners aus deiner Hand auf deinen Ablagestapel gelegt wird, lege die Handkarten deines Gegners auf seinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Hypno Hammer",
			'fr-fr': "Marteau Hypnotique",
			'es-es': "Martillo Hipnótico",
			'it-it': "Martello Ipnotico",
			'pt-br': "Martelo Hipnótico",
			'de-de': "Hypnohammer"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon puffs poisonous spores at its foes. If the spores aren't washed off quickly, they'll grow into mushrooms wherever they land.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682053,
				tcgplayer: 451633
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682053,
				tcgplayer: 451633
			}
		},
	],
}

export default card

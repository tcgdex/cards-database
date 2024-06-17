import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [591],
	set: Set,

	name: {
		en: "Amoonguss",
		fr: "Gaulet",
		es: "Amoonguss",
		it: "Amoonguss",
		pt: "Amoonguss",
		de: "Hutsassa"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
		es: "Foongus",
		it: "Foongus",
		pt: "Foongus",
		de: "Tarnpignon"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Surprise Spores",
			fr: "Spores Surprises",
			es: "Esporas Sorpresa",
			it: "Spore Burlone",
			pt: "Esporos Surpresa",
			de: "Überraschungssporen"
		},

		effect: {
			en: "During your opponent's turn, if this Pokémon is discarded from your hand by an effect of an attack or Ability from your opponent's Pokémon, or by an effect of your opponent's Item or Supporter cards, discard your opponent's hand.",
			fr: "Pendant le tour de votre adversaire, si ce Pokémon est défaussé de votre main par l'effet d'une attaque ou d'un talent d'un Pokémon de votre adversaire, ou par l'effet d'une carte Objet ou Supporter de votre adversaire, votre adversaire défausse sa main.",
			es: "Durante el turno de tu rival, si se descarta este Pokémon de tu mano por el efecto de un ataque o habilidad de los Pokémon de tu rival, o por el efecto de las cartas de Objeto o de Partidario de tu rival, descarta la mano de tu rival.",
			it: "Durante il turno del tuo avversario, se questo Pokémon viene scartato dalla tua mano per effetto di un attacco o di un'abilità di un Pokémon del tuo avversario, o per effetto delle carte Strumento o carte Aiuto del tuo avversario, scarta le carte nella mano del tuo avversario.",
			pt: "Durante o turno do seu oponente, se este Pokémon for descartado da sua mão pelos efeitos de um ataque ou Habilidade dos Pokémon do seu oponente, ou pelos efeitos de cartas de Item ou Apoiador do seu oponente, descarte a mão do seu oponente.",
			de: "Wenn dieses Pokémon während des Zuges deines Gegners durch einen Effekt einer Attacke oder Fähigkeit von Pokémon deines Gegners oder durch einen Effekt von Item- oder Unterstützerkarten deines Gegners aus deiner Hand auf deinen Ablagestapel gelegt wird, lege die Handkarten deines Gegners auf seinen Ablagestapel."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Hypno Hammer",
			fr: "Marteau Hypnotique",
			es: "Martillo Hipnótico",
			it: "Martello Ipnotico",
			pt: "Martelo Hipnótico",
			de: "Hypnohammer"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
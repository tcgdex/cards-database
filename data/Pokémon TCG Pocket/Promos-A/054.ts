import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmot",
		fr: "Pohmarmotte",
		es: "Pawmot",
		it: "Pawmot",
		de: "Pamomamo",
		'pt-br': "Pawmot",
		ko: "빠르모트"
	},

	illustrator: "REND",
	rarity: "One Star",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		en: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
		fr: "D'ordinaire, ce Pokémon est plutôt calme,\nmais lorsqu'il se bat, il élimine ses adversaires\navec des mouvements rapides comme l'éclair.",
		es: "Este Pokémon es normalmente bastante calmado,\npero, una vez en combate, derriba a sus rivales\ncon movimientos de una velocidad vertiginosa.",
		it: "Di solito è piuttosto flemmatico, ma\nquando si trova a lottare atterra il\nnemico con movimenti fulminei.",
		de: "Dieses Pokémon ist für gewöhnlich sehr gelassen,\ndoch sobald ein Kampf beginnt, streckt es den Gegner\nmit blitzschnellen Bewegungen zu Boden.",
		'pt-br': "Este Pokémon costuma demorar para reagir, mas quando\nentra na batalha, derrota seus oponentes\ncom golpes na velocidade da luz.",
		ko: "평소에는 느긋하지만\n싸움이 시작되면 전광석화와도 같은\n몸놀림으로 적을 때려눕힌다."
	},

	stage: "Stage2",

	evolveFrom: {
		en: "Pawmo"
	},

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack",
			fr: "Contre-Attaque",
			es: "Contragolpe",
			it: "Respinta",
			de: "Gegenangriff",
			'pt-br': "Contra-ataque",
			ko: "반격"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 20 dégâts.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival, el Pokémon Atacante sufre 20 puntos de daño.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, il Pokémon attaccante subisce 20 danni.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält, füge dem Angreifenden Pokémon 20 Schadenspunkte zu.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente, cause 20 pontos de dano ao Pokémon Atacante.",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 20데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			es: "Puño Eléctrico",
			it: "Pugno Elettrico",
			de: "Elektroschlag",
			'pt-br': "Murro Elétrico",
			ko: "찌리리펀치"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"]
	}],

	boosters: ["vol6"]
}

export default card

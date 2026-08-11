import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pawmot",
		'fr-fr': "Pohmarmotte",
		'es-es': "Pawmot",
		'it-it': "Pawmot",
		'de-de': "Pamomamo",
		'pt-br': "Pawmot",
		'ko-kr': "빠르모트"
	},

	illustrator: "Saboteri",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [923],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pawmo"
	},

	description: {
		'en-us': "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
		'fr-fr': "D'ordinaire, ce Pokémon est plutôt calme,\nmais lorsqu'il se bat, il élimine ses adversaires\navec des mouvements rapides comme l'éclair.",
		'es-es': "Este Pokémon es normalmente bastante calmado,\npero, una vez en combate, derriba a sus rivales\ncon movimientos de una velocidad vertiginosa.",
		'it-it': "Di solito è piuttosto flemmatico, ma\nquando si trova a lottare atterra il\nnemico con movimenti fulminei.",
		'de-de': "Dieses Pokémon ist für gewöhnlich sehr gelassen,\ndoch sobald ein Kampf beginnt, streckt es den Gegner\nmit blitzschnellen Bewegungen zu Boden.",
		'pt-br': "Este Pokémon costuma demorar para reagir, mas quando\nentra na batalha, derrota seus oponentes\ncom golpes na velocidade da luz.",
		'ko-kr': "평소에는 느긋하지만\n싸움이 시작되면 전광석화와도 같은\n몸놀림으로 적을 때려눕힌다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Counterattack",
			'fr-fr': "Contre-Attaque",
			'es-es': "Contragolpe",
			'it-it': "Respinta",
			'de-de': "Gegenangriff",
			'pt-br': "Contra-ataque",
			'ko-kr': "반격"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 20 dégâts.",
			'es-es': "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival, el Pokémon Atacante sufre 20 puntos de daño.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, il Pokémon attaccante subisce 20 danni.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält, füge dem Angreifenden Pokémon 20 Schadenspunkte zu.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente, cause 20 pontos de dano ao Pokémon Atacante.",
			'ko-kr': "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 20데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Electric Punch",
			'fr-fr': "Poing Électrique",
			'es-es': "Puño Eléctrico",
			'it-it': "Pugno Elettrico",
			'de-de': "Elektroschlag",
			'pt-br': "Murro Elétrico",
			'ko-kr': "찌리리펀치"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card
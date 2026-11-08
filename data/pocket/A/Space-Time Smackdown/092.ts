import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'de-de': "Lucario",
		'pt-br': "Lucario",
		'ko-kr': "루카리오"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [448],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Riolu"
	},

	description: {
		'en-us': "It's said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.",
		'fr-fr': "On dit qu'il peut repérer ses ennemis, même\nlorsqu'ils sont invisibles, car il ressent leur aura.",
		'es-es': "Dicen que, como es capaz de detectar auras,\npuede percibir a sus rivales aunque no los vea.",
		'it-it': "Si dice che riesca a individuare anche\ngli avversari invisibili percependone l'aura.",
		'de-de': "Man sagt, es könne sogar unsichtbare Gegner ausmachen,\nweil es dazu fähig ist, Auren wahrzunehmen.",
		'pt-br': "Como Lucario pode detectar auras, acredita-se\nque nenhum inimigo é invisível a seus olhos.\nAté mesmo aqueles que ele não consegue ver.",
		'ko-kr': "파동을 포착하여\n보이지 않는 상대의 모습도\n볼 수 있다고 전해진다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fighting Coach",
			'fr-fr': "Entraînement au Combat",
			'es-es': "Entrenador de Combate",
			'it-it': "Istruttore di Lotta",
			'de-de': "Kampfcoach",
			'pt-br': "Instrutor de Luta",
			'ko-kr': "파이팅 코치"
		},

		effect: {
			'en-us': "Attacks used by your {F} Pokémon do +20 damage to your opponent's Active Pokémon.",
			'fr-fr': "Les attaques de vos Pokémon {F} infligent + 20 dégâts au Pokémon Actif de votre adversaire.",
			'es-es': "Los ataques de tus Pokémon {F} hacen {F}+20 puntos[/Ctrl:NoBreak] de daño al Pokémon Activo de tu rival.",
			'it-it': "Gli attacchi usati dai tuoi Pokémon {F} infliggono +20 danni al Pokémon attivo del tuo avversario.",
			'de-de': "Die Attacken deiner {F}-Pokémon fügen dem Aktiven Pokémon deines Gegners + 20 Schadenspunkte zu.",
			'pt-br': "Os ataques usados pelos seus Pokémon {F} causam +20 pontos de dano ao Pokémon Ativo do seu oponente.",
			'ko-kr': "이 포켓몬이 있는 한, 자신의 {F}포켓몬이 사용하는 기술이 상대의 배틀 포켓몬에게 주는 데미지를 +20한다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Submarine Blow",
			'fr-fr': "Coup Sous-Marin",
			'es-es': "Impacto Submarino",
			'it-it': "Colpo Sottomarino",
			'de-de': "Unterseehieb",
			'pt-br': "Golpe Submarino",
			'ko-kr': "서브머린블로"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card

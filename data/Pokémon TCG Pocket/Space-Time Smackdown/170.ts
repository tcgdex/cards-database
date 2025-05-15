import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		de: "Lucario",
		'pt-br': "Lucario",
		ko: "루카리오"
	},

	illustrator: "Akira Komayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Riolu"
	},

	description: {
		en: "It's said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.",
		fr: "On dit qu'il peut repérer ses ennemis, même\nlorsqu'ils sont invisibles, car il ressent leur aura.",
		es: "Dicen que, como es capaz de detectar auras,\npuede percibir a sus rivales aunque no los vea.",
		it: "Si dice che riesca a individuare anche\ngli avversari invisibili percependone l'aura.",
		de: "Man sagt, es könne sogar unsichtbare Gegner ausmachen,\nweil es dazu fähig ist, Auren wahrzunehmen.",
		'pt-br': "Como Lucario pode detectar auras, acredita-se\nque nenhum inimigo é invisível a seus olhos.\nAté mesmo aqueles que ele não consegue ver.",
		ko: "파동을 포착하여\n보이지 않는 상대의 모습도\n볼 수 있다고 전해진다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fighting Coach",
			fr: "Entraînement au Combat",
			es: "Entrenador de Combate",
			it: "Istruttore di Lotta",
			de: "Kampfcoach",
			'pt-br': "Instrutor de Luta",
			ko: "파이팅 코치"
		},

		effect: {
			en: "Attacks used by your {F} Pokémon do +20 damage to your opponent's Active Pokémon.",
			fr: "Les attaques de vos Pokémon {F} infligent + 20 dégâts au Pokémon Actif de votre adversaire.",
			es: "Los ataques de tus Pokémon {F} hacen {F}+20 puntos[/Ctrl:NoBreak] de daño al Pokémon Activo de tu rival.",
			it: "Gli attacchi usati dai tuoi Pokémon {F} infliggono +20 danni al Pokémon attivo del tuo avversario.",
			de: "Die Attacken deiner {F}-Pokémon fügen dem Aktiven Pokémon deines Gegners + 20 Schadenspunkte zu.",
			'pt-br': "Os ataques usados pelos seus Pokémon {F} causam +20 pontos de dano ao Pokémon Ativo do seu oponente.",
			ko: "이 포켓몬이 있는 한, 자신의 {F}포켓몬이 사용하는 기술이 상대의 배틀 포켓몬에게 주는 데미지를 +20한다."
		}
	}],

	attacks: [{
		name: {
			en: "Submarine Blow",
			fr: "Coup Sous-Marin",
			es: "Impacto Submarino",
			it: "Colpo Sottomarino",
			de: "Unterseehieb",
			'pt-br': "Golpe Submarino",
			ko: "서브머린블로"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card

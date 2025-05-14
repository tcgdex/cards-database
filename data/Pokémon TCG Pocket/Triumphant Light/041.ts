import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		es: "Tyranitar",
		it: "Tyranitar",
		de: "Despotar",
		'pt-br': "Tyranitar",
		ko: "마기라스"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Pupitar"
	},

	description: {
		en: "Extremely strong, it can change the landscape. It is so insolent that it doesn't care about others.",
		fr: "Ce Pokémon est si fort qu'il est capable\nde modifier la topographie d'un lieu.\nIl ne se préoccupe pas des autres.",
		es: "Tiene tanta fuerza que puede cambiar el paisaje.\nSu naturaleza insolente le hace ser muy egoísta.",
		it: "Con la sua forza smisurata riesce a trasformare\nil paesaggio con estrema facilità. La sua indole\ninsolente lo rende indifferente al mondo.",
		de: "Dieses kaltblütige und rücksichtslose Pokémon ist\nso stark, dass es mit Leichtigkeit das Aussehen\nganzer Landstriche verändern kann.",
		'pt-br': "Extremamente forte, pode modificar a paisagem.\nÉ tão insolente que não se preocupa com os outros.",
		ko: "주변 지형을 바꾸는 정도쯤은\n쉽게 해낼 정도의 힘을 가지고 있다.\n주위를 신경 쓰지 않는 대담한 성격."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Power Link",
			fr: "Lien Puissance",
			es: "Vínculo Poderoso",
			it: "Potenza Simbiotica",
			de: "Kraftkopplung",
			'pt-br': "Elo de Poder",
			ko: "파워 링크"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, attacks used by this Pokémon do +30 damage to your opponent's Active Pokémon.",
			fr: "Si vous avez Arceus ou Arceus-ex en jeu, les attaques utilisées par ce Pokémon infligent + 30 dégâts au Pokémon Actif de votre adversaire.",
			es: "Si tienes a Arceus o Arceus ex en juego, los ataques de este Pokémon hacen Arceus+30 puntos[/Ctrl:NoBreak] de daño al Pokémon Activo de tu rival.",
			it: "Se hai in gioco Arceus o Arceus-ex, gli attacchi usati da questo Pokémon infliggono +30 danni al Pokémon attivo del tuo avversario.",
			de: "Wenn du Arceus oder Arceus-ex im Spiel hast, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners + 30 Schadenspunkte zu.",
			'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, os ataques usados por este Pokémon causarão +30 pontos de dano ao Pokémon Ativo do seu oponente.",
			ko: "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」Arceus 있다면 이 포켓몬이 사용하는 기술이 상대의 배틀 포켓몬에게 주는 데미지를 Arceus+30[/Ctrl:NoBreak]한다."
		}
	}],

	attacks: [{
		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			es: "Aterrizaje",
			it: "Schiacciaterra",
			de: "Schollenbrecher",
			'pt-br': "Aperto de Terra",
			ko: "랜드크래시"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card

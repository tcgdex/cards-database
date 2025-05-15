import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		de: "Rotom",
		'pt-br': "Rotom",
		ko: "로토무"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Its electricity-like body can enter some kinds of machines and take control in order to make mischief.",
		fr: "Son corps semblable à de l'électricité lui permet\nde prendre le contrôle de certains appareils\nménagers pour jouer des tours aux autres.",
		es: "Con su cuerpo eléctrico puede infiltrarse en algunos\naparatos para controlarlos y hacer travesuras.",
		it: "Il suo corpo simile all'elettricità può introdursi in alcuni\napparecchi, di cui prende il controllo per combinare guai.",
		de: "Sein Körper ähnelt Elektrizität und erlaubt es ihm,\nin einige Geräte einzudringen, um dann damit für\nChaos zu sorgen.",
		'pt-br': "Seu corpo elétrico pode penetrar em alguns tipos\nde máquinas e assumir o controle para fazer malvadezas.",
		ko: "전기 같은 몸은\n일부 기계에 들어갈 수 있다.\n그리고 그 몸으로 장난을 친다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Speed Link",
			fr: "Lien Vitesse",
			es: "Vínculo Veloz",
			it: "Agilità Simbiotica",
			de: "Tempokopplung",
			'pt-br': "Elo de Velocidade",
			ko: "스피드 링크"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, this Pokémon has no Retreat Cost.",
			fr: "Si vous avez Arceus ou Arceus-ex en jeu, ce Pokémon n'a aucun Coût de Retraite.",
			es: "Si tienes a Arceus o Arceus ex en juego, este Pokémon no tiene ningún Coste de Retirada.",
			it: "Se hai in gioco Arceus o Arceus-ex, questo Pokémon non ha costo di ritirata.",
			de: "Wenn du Arceus oder Arceus-ex im Spiel hast, hat dieses Pokémon keine Rückzugskosten.",
			'pt-br': "Se você tiver Arceus ou Arceus ex em jogo, este Pokémon não terá custo de Recuo.",
			ko: "자신의 필드에 「아르세우스」 또는 「아르세우스 ex」 있다면 이 포켓몬의 후퇴에 필요한 에너지를 모두 없앤다."
		}
	}],

	attacks: [{
		name: {
			en: "Dash Attack",
			fr: "Attaque Brusque",
			es: "Ataque Carrera",
			it: "Scattattacco",
			de: "Spurtangriff",
			'pt-br': "Ataque Arremetida",
			ko: "대시어택"
		},

		cost: ["Colorless"],

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts à un des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 1마리에게 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card

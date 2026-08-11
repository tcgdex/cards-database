import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rotom",
		'fr-fr': "Motisma",
		'es-es': "Rotom",
		'it-it': "Rotom",
		'de-de': "Rotom",
		'pt-br': "Rotom",
		'ko-kr': "로토무"
	},

	illustrator: "Krgc",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [479],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "Its electricity-like body can enter some kinds of machines and take control in order to make mischief.",
		'fr-fr': "Son corps semblable à de l'électricité lui permet\nde prendre le contrôle de certains appareils\nménagers pour jouer des tours aux autres.",
		'es-es': "Con su cuerpo eléctrico puede infiltrarse en algunos\naparatos para controlarlos y hacer travesuras.",
		'it-it': "Il suo corpo simile all'elettricità può introdursi in alcuni\napparecchi, di cui prende il controllo per combinare guai.",
		'de-de': "Sein Körper ähnelt Elektrizität und erlaubt es ihm,\nin einige Geräte einzudringen, um dann damit für\nChaos zu sorgen.",
		'pt-br': "Seu corpo elétrico pode penetrar em alguns tipos\nde máquinas e assumir o controle para fazer malvadezas.",
		'ko-kr': "전기 같은 몸은\n일부 기계에 들어갈 수 있다.\n그리고 그 몸으로 장난을 친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Assault Laser",
			'fr-fr': "Laser d'Assaut",
			'es-es': "Láser de Asalto",
			'it-it': "Laserassalto",
			'de-de': "Offensiv-Laser",
			'pt-br': "Laser de Ataque",
			'ko-kr': "어솔트레이저"
		},

		damage: "20+",
		cost: ["Colorless"],

		effect: {
			'en-us': "If your opponent's Active Pokémon has a Pokémon Tool attached, this attack does 30 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival tiene 1 Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha un Oggetto Pokémon assegnato, questo attacco infligge 30 danni in più.",
			'de-de': "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card

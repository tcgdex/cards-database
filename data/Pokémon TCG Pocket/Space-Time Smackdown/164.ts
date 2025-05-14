import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

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

	illustrator: "Shimaris Yukichi",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

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

	attacks: [{
		name: {
			en: "Assault Laser",
			fr: "Laser d'Assaut",
			es: "Láser de Asalto",
			it: "Laserassalto",
			de: "Offensiv-Laser",
			'pt-br': "Laser de Ataque",
			ko: "어솔트레이저"
		},

		damage: "20+",
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool attached, this attack does 30 more damage.",
			fr: "Si un Outil Pokémon est attaché au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival tiene 1 Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha un Oggetto Pokémon assegnato, questo attacco infligge 30 danni in più.",
			de: "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 30 pontos de dano a mais.",
			ko: "상대의 배틀 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card

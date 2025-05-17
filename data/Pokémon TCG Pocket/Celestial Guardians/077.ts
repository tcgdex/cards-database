import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		de: "Choreogel",
		'pt-br': "Oricorio",
		ko: "춤추새"
	},

	illustrator: "Jerky",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This form of Oricorio has sipped purple nectar. It uses ethereal dance steps to call forth the spirits of the dead.",
		fr: "Ce Plumeline a bu du Nectar Mauve. Ses pas\nde danse éthérés invoquent les âmes de l'au-delà.",
		es: "Forma que toma Oricorio al libar Néctar Violeta.\nInvoca a los espíritus de los difuntos con su danza hechizante.",
		it: "Forma di un Oricorio che si è nutrito di Nettare viola.\nChiama a sé le anime dei morti con eterei passi di danza.",
		de: "Dieses Choreogel hat Purpurnen Nektar geschlürft.\nMit anmutigen Tanzschritten beschwört es die\nSeelen Verstorbener.",
		'pt-br': "Esta forma de Oricorio bebericou néctar roxo.\nUsa passos de dança etéreos para invocar\nos espíritos dos mortos.",
		ko: "보라꿀을 빨아들인 모습.\n환상적인 스텝으로\n죽은 자의 영혼을 불러낸다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiteful Dance",
			fr: "Danse Rancunière",
			es: "Danza Malévola",
			it: "Danza del Rancore",
			de: "Tückischer Tanz",
			'pt-br': "Dança Vingativa",
			ko: "원한의춤"
		},

		damage: "20+",
		cost: ["Psychic"],

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 60 danni in più.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 60 pontos de dano a mais.",
			ko: "상대의 이전 차례에 기술의 데미지로 자신의 포켓몬이 기절했다면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card

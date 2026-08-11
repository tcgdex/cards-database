import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Banette",
		'fr-fr': "Branette",
		'es-es': "Banette",
		'it-it': "Banette",
		'de-de': "Banette",
		'pt-br': "Banette",
		'ko-kr': "다크펫"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [354],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Shuppet"
	},

	description: {
		'en-us': "This Pokémon developed from an abandoned doll that amassed a grudge. It is seen in dark alleys.",
		'fr-fr': "Ce Pokémon est une poupée abandonnée que\nla rancune a animée. Il hante les ruelles sombres.",
		'es-es': "Está lleno de rencor porque lo tiraron a la basura\ncuando era un muñeco. Vive en oscuros callejones.",
		'it-it': "Un peluche gettato via, tramutato in Pokémon da\nun profondo rancore. Lo si vede spesso in vicoli bui.",
		'de-de': "Es war einst eine weggeworfene Plüschpuppe,\ndie durch einen tiefen Groll zu einem Pokémon\nwurde. Man findet es in dunklen Gassen.",
		'pt-br': "Este Pokémon surgiu de uma boneca abandonada\nque acumulava inveja. Ele é visto em becos escuros.",
		'ko-kr': "버려진 인형에 원념이\n깃들어 포켓몬이 되었다.\n어둑한 뒷골목에서 발견된다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Night Bind",
			'fr-fr': "Lien Nocturne",
			'es-es': "Atadura Nocturna",
			'it-it': "Leganotte",
			'de-de': "Nachtbindung",
			'pt-br': "Aprisionamento Noturno",
			'ko-kr': "나이트바인드"
		},

		damage: 30,
		cost: ["Psychic"],

		effect: {
			'en-us': "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut prendre aucune Énergie de sa zone Énergie pour en attacher à son Pokémon Actif.",
			'es-es': "Durante el próximo turno de tu rival, este no puede unir ninguna Energía de su área de Energía a su Pokémon Activo.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può prendere nessuna Energia dalla sua Zona Energia per assegnarla al suo Pokémon attivo.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Energie aus seinem Energiebereich an sein Aktives Pokémon anlegen.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá pegar nenhuma Energia da Zona de Energia para ligar ao Pokémon Ativo dele.",
			'ko-kr': "상대의 다음 차례에 상대는 에너지존에서 에너지를 내보내서 배틀 포켓몬에게 붙일 수 없다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card
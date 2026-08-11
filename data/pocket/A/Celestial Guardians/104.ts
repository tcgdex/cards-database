import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Passimian ex",
		'fr-fr': "Quartermac-ex",
		'es-es': "Passimian ex",
		'it-it': "Passimian-ex",
		'de-de': "Quartermak-ex",
		'pt-br': "Passimian ex",
		'ko-kr': "내던숭이 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [766],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Offload Pass",
			'fr-fr': "Passe Latérale",
			'es-es': "Pase de Energía",
			'it-it': "Passaggio di Testimone",
			'de-de': "Offload-Pass",
			'pt-br': "Passe do Desapego",
			'ko-kr': "오프로드 패스"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move all {F} Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, déplacez toute l'Énergie {F} de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, mueve todas las Energías {F} de este Pokémon a 1 de tus Pokémon en Banca.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, sposta tutte le Energie {F} da questo Pokémon a uno di quelli nella tua panchina.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, verschiebe alle {F}-Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, mova todas as Energias {F} deste Pokémon para 1 dos seus Pokémon no Banco.",
			'ko-kr': "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받아 기절했을 때 이 포켓몬에서 {F}에너지를 모두 벤치 포켓몬 1마리에게 바꿔 붙인다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Seismic Toss",
			'fr-fr': "Frappe Atlas",
			'es-es': "Sísmico",
			'it-it': "Movimento Sismico",
			'de-de': "Geowurf",
			'pt-br': "Arremesso Sísmico",
			'ko-kr': "지구던지기"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card

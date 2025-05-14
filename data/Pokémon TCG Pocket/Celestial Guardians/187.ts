import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Passimian ex",
		fr: "Quartermac-ex",
		es: "Passimian ex",
		it: "Passimian-ex",
		de: "Quartermak-ex",
		'pt-br': "Passimian ex",
		ko: "내던숭이 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Offload Pass",
			fr: "Passe Latérale",
			es: "Pase de Energía",
			it: "Passaggio di Testimone",
			de: "Offload-Pass",
			'pt-br': "Passe do Desapego",
			ko: "오프로드 패스"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move all {F} Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et qu'il est mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire, déplacez toute l'Énergie {F} de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, mueve todas las Energías {F} de este Pokémon a 1 de tus Pokémon en Banca.",
			it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, sposta tutte le Energie {F} da questo Pokémon a uno di quelli nella tua panchina.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, verschiebe alle {F} Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, mova todas as Energias {F} deste Pokémon para 1 dos seus Pokémon no Banco.",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받아 기절했을 때 이 포켓몬에서 {F}에너지를 모두 벤치 포켓몬 1마리에게 바꿔 붙인다."
		}
	}],

	attacks: [{
		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			it: "Movimento Sismico",
			de: "Geowurf",
			'pt-br': "Arremesso Sísmico",
			ko: "지구던지기"
		},

		damage: 60,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card

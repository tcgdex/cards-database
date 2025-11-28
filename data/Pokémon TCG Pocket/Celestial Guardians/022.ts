import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Golisopod",
		fr: "Sarmuraï",
		es: "Golisopod",
		it: "Golisopod",
		de: "Tectass",
		'pt-br': "Golisopod",
		ko: "갑주무사"
	},

	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [768],
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Wimpod"
	},

	description: {
		en: "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs.",
		fr: "Il ne recule devant rien pour gagner. Il profite de\nl'inattention de son adversaire pour lui administrer\nun coup décisif de ses petites griffes antérieures.",
		es: "Hace lo que sea por conseguir la victoria.\nSi el rival se descuida, aprovecha para asestarle\nun golpe letal con sus pequeñas garras frontales.",
		it: "È disposto a tutto per vincere. Colpisce\nl'avversario quando abbassa la guardia e lo\nfinisce con i piccoli artigli degli arti anteriori.",
		de: "Es schreckt vor nichts zurück, um zu gewinnen.\nSieht es eine Chance, schlägt es zu und gibt dem\nOpfer mit seinen Klauen schließlich den Rest.",
		'pt-br': "É capaz de fazer qualquer coisa pela vitória e aproveita\ntodas as oportunidades para acabar com seus oponentes\nusando suas pequenas garras em suas patas dianteiras.",
		ko: "이기기 위해서는 수단을 가리지 않는다.\n상대의 빈틈을 찌른 뒤 앞발의\n작은 발톱으로 마무리한다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "First Impression",
			fr: "Escarmouche",
			es: "Escaramuza",
			it: "Schermaglia",
			de: "Überrumpler",
			'pt-br': "Primeira Impressão",
			ko: "만나자마자"
		},

		damage: "60+",
		cost: ["Grass", "Grass", "Grass"],

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 60 more damage.",
			fr: "Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si este Pokémon se ha movido de tu Banca al Puesto Activo en este turno, este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon si è spostato dalla tua panchina in posizione attiva nel turno in corso, questo attacco infligge 60 danni in più.",
			de: "Wenn dieses Pokémon während dieses Zuges von deiner Bank in die Aktive Position gewechselt ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon foi movido do seu Banco para o Campo Ativo neste turno, este ataque causará 60 pontos de dano a mais.",
			ko: "이 차례에 이 포켓몬이 벤치에서 배틀필드로 나왔다면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["solgaleo"]
}

export default card

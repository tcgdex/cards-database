import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Origin Forme Dialga",
		fr: "DialgaForme Originelle",
		es: "DialgaOrigen",
		it: "DialgaForma Originale",
		de: "Ur-Dialga",
		'pt-br': "DialgaForma Origem",
		ko: "오리진디아루가"
	},

	illustrator: "akagi",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		en: "Radiant light caused Dialga to take on a form bearing a striking resemblance to the creator Pokémon. Dialga now wields such colossal strength that one must conclude this is its true form.",
		fr: "La lumière lui a donné cette forme semblable à celle du créateur\nde toutes choses. La force qu'il déploie est telle que je ne peux\nm'empêcher de penser qu'il est sous sa forme véritable.",
		es: "La luz desencadena el cambio a esta forma, que recuerda\nal creador de todo lo existente. La colosal fuerza de la que\nhace gala nos sugiere que se trata de su verdadera forma.",
		it: "La luce ha cagionato in lui un cambio di forma radicale,\nrendendolo un simulacro della divinità creatrice sì potente\nche fatico a non ritenere questa la sua forma veritiera.",
		de: "Licht lässt es eine Form annehmen, die der Schöpfergottheit\nzu gleichen scheint. Die gewaltige Stärke nährt den Verdacht,\ndass es sich bei dieser Gestalt um sein wahres Antlitz handelt.",
		'pt-br': "Uma luz radiante fez com que Dialga assumisse uma\nforma semelhante ao Pokémon criador. Sua força é tão\ncolossal que acreditam ser essa a sua verdadeira forma.",
		ko: "밝은 빛이 폼체인지의 방아쇠가 되었다.\n창조신과 흡사한 이 모습이야말로 진정한 모습임에\n의심할 여지가 없을 정도로 강력한 힘을 발휘한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Time Mash",
			fr: "Compression Temporelle",
			es: "Espacio Ácrono",
			it: "Botta Temporale",
			de: "Zeitenbrecher",
			'pt-br': "Esmagamento de Tempo",
			ko: "타임크래시"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
			it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Wirf 1 Münze. Bei Zahl kann dieses Pokémon während deines nächsten Zuges nicht angreifen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, durante o seu próximo turno, este Pokémon não poderá atacar.",
			ko: "동전을 1번 던져서 뒷면이 나오면 자신의 다음 차례에 이 포켓몬은 기술을 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card

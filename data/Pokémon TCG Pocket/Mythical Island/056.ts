import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		es: "Druddigon",
		it: "Druddigon",
		de: "Shardrago",
		'pt-br': "Druddigon",
		ko: "크리만"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",

	dexId: [621],
	hp: 100,
	types: ["Dragon"],

	description: {
		en: "Druddigon lives in caves, but it never skips sunbathing—it won't be able to move if its body gets too cold.",
		fr: "Il vit sous terre, mais il doit impérativement\ns'exposer au soleil, car il devient incapable\nde bouger lorsque son corps se refroidit.",
		es: "Habita en túneles. Pierde la movilidad si baja su\ntemperatura corporal, por lo que aprovecha la\nmenor oportunidad para tomar el sol.",
		it: "Vive in cavità sotterranee, ma poiché non\nriesce più a muoversi se il suo corpo si\nraffredda, non può fare a meno dei bagni di sole.",
		de: "Shardrago lebt in Grotten. Kühlt sein Körper ab,\nerstarrt es, weshalb es regelmäßig Sonnenbäder\nnehmen muss.",
		'pt-br': "Druddigon habita cavernas, mas nunca deixa de tomar um banho de sol.\nEle não é capaz de mover seu corpo se ficar com muito frio.",
		ko: "토굴에 산다. 몸이 차가워지면\n움직이지 못하기 때문에\n일광욕을 거르지 않는다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rough Skin",
			fr: "Peau Dure",
			es: "Piel Tosca",
			it: "Cartavetro",
			de: "Rauhaut",
			'pt-br': "Pele Áspera",
			ko: "까칠한피부"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et subit les dégâts d'une attaque d'un Pokémon de votre adversaire, le Pokémon Attaquant subit 20 dégâts.",
			es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival, el Pokémon Atacante sufre 20 puntos de daño.",
			it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, il Pokémon attaccante subisce 20 danni.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält, füge dem Angreifenden Pokémon 20 Schadenspunkte zu.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente, cause 20 pontos de dano ao Pokémon Atacante.",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 기술을 사용한 포켓몬에게 20데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			es: "Garra Dragón",
			it: "Dragartigli",
			de: "Drachenklaue",
			'pt-br': "Garra de Dragão",
			ko: "드래곤클로"
		},

		damage: 90,
		cost: ["Fire", "Water", "Colorless"]
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card

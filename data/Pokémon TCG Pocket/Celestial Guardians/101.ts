import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		de: "Wolwerock",
		'pt-br': "Lycanroc",
		ko: "루가루암"
	},

	illustrator: "5ban Graphics",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff"
	},

	description: {
		en: "This Pokémon uses its rocky mane to slash any who approach. It will even disobey its Trainer if it dislikes the orders it was given.",
		fr: "Ce Pokémon tranche de sa crinière\nrocheuse quiconque s'approche un peu trop.\nIl désobéit aux ordres qui lui déplaisent.",
		es: "Desgarra a cualquiera que se acerque con su\nmelena de piedra. Si no está de acuerdo con\nlas instrucciones de su Entrenador, las ignora.",
		it: "Taglia con la criniera di rocce chi gli si avvicina.\nDisobbedisce addirittura al suo Allenatore se le\nindicazioni ricevute non sono di suo gradimento.",
		de: "Mit seiner steinernen Mähne schaltet es jeden aus,\nder sich ihm nähert. Den Anweisungen seines Trainers\nfolgt es nur, wenn diese ihm zusagen.",
		'pt-br': "Este Pokémon usa sua juba pedregosa para dilacerar\nqualquer um que se aproxime. Desobedecerá até seu\nTreinador se não gostar das ordens que lhe forem dadas.",
		ko: "바위로 된 갈기로 다가오는 자를\n베어 버린다. 트레이너의 지시도\n마음에 안 들면 따르지 않는다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Blood Fang",
			fr: "Crocs de Sang",
			es: "Colmillo Sangriento",
			it: "Zanne Sanguinarie",
			de: "Blutfänge",
			'pt-br': "Presa Sanguinária",
			ko: "블러드팽"
		},

		damage: "50+",
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "If your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 50 more damage.",
			fr: "S'il reste plus de PV au Pokémon Actif de votre adversaire qu'à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si al Pokémon Activo de tu rival le quedan más PS que a este Pokémon, este ataque hace 50 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha più PS rimanenti di questo Pokémon, questo attacco infligge 50 danni in più.",
			de: "Wenn das Aktive Pokémon deines Gegners mehr verbleibende KP als dieses Pokémon hat, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente tiver mais PS restante do que este Pokémon, este ataque causará 50 pontos de dano a mais.",
			ko: "상대 배틀 포켓몬의 남은 HP가 이 포켓몬의 남은 HP보다 많다면 50데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card

import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwrath",
		fr: "Tartard",
		es: "Poliwrath",
		it: "Poliwrath",
		de: "Quappo",
		'pt-br': "Poliwrath",
		ko: "강챙이"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [62],
	hp: 150,
	types: ["Water"],
	stage: "Stage2",

	evolveFrom: {
		en: "Poliwhirl"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack",
			fr: "Contre-Attaque",
			es: "Contragolpe",
			it: "Respinta",
			de: "Gegenangriff",
			'pt-br': "Contra-ataque",
			ko: "반격"
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
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			de: "Megahieb",
			'pt-br': "Megassoco",
			ko: "메가톤펀치"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.",
		fr: "Cette véritable montagne de muscles peut\nse frayer un chemin même dans les eaux glaciales\nen éclatant la banquise avec ses bras robustes.",
		es: "Su cuerpo es puro músculo. Logra\nabrirse paso por aguas gélidas partiendo\nel hielo con sus fornidos brazos.",
		it: "Il suo corpo è un ammasso di muscoli. Nuota\nanche nei mari più freddi frantumando il ghiaccio\nfluttuante con le braccia vigorose per farsi strada.",
		de: "Sein ganzer Körper besteht fast nur aus Muskeln.\nIn kalten Meeren zerschlägt es mit seinen starken\nArmen Treibeis, um voranzukommen.",
		'pt-br': "Seu corpo é puro músculo. Quando nada por mares\ngelados, Poliwrath usa seus braços incríveis para\nesmagar o gelo à frente e abrir caminho.",
		ko: "전신이 근육 덩어리다.\n추운 바다에서도 늠름한 팔로\n유빙을 부수며 힘차게 나아간다."
	},

	boosters: ["charizard"]
}

export default card

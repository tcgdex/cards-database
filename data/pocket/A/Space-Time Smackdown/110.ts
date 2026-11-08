import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darkrai ex",
		'fr-fr': "Darkrai-ex",
		'es-es': "Darkrai ex",
		'it-it': "Darkrai-ex",
		'de-de': "Darkrai-ex",
		'pt-br': "Darkrai ex",
		'ko-kr': "다크라이 ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [491],
	hp: 140,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Nightmare Aura",
			'fr-fr': "Aura Cauchemardesque",
			'es-es': "Aura Pesadilla",
			'it-it': "Aura dell'Incubo",
			'de-de': "Alptraum-Aura",
			'pt-br': "Aura de Pesadelo",
			'ko-kr': "나이트메어 오라"
		},

		effect: {
			'en-us': "Whenever you attach a {D} Energy from your Energy Zone to this Pokémon, do 20 damage to your opponent's Active Pokémon.",
			'fr-fr': "Chaque fois que vous attachez une Énergie {D} de votre zone Énergie à ce Pokémon, infligez 20 dégâts au Pokémon Actif de votre adversaire.",
			'es-es': "Cada vez que unas una Energía {D} de tu área de Energía a este Pokémon, haz 20 puntos de daño al Pokémon Activo de tu rival.",
			'it-it': "Ogni volta che assegni un'Energia {D} a questo Pokémon dalla tua Zona Energia, infliggi 20 danni al Pokémon attivo dell'avversario.",
			'de-de': "Füge jedes Mal, wenn du 1 {D}-Energie aus dem Energiebereich an dieses Pokémon anlegst, dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Sempre que você ligar uma Energia {D} da sua Zona de Energia a este Pokémon, cause 20 pontos de dano ao Pokémon Ativo do seu oponente.",
			'ko-kr': "자신의 에너지존에서 이 포켓몬에게 {D}에너지를 붙일 때마다 상대의 배틀 포켓몬에게 20데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Dark Prism",
			'fr-fr': "Prisme Obscur",
			'es-es': "Prisma Oscuro",
			'it-it': "Prisma Oscuro",
			'de-de': "Dunkles Prisma",
			'pt-br': "Prisma da Escuridão",
			'ko-kr': "다크프리즘"
		},

		damage: 80,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card

import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Glaceon ex",
		'fr-fr': "Givrali-ex",
		'es-es': "Glaceon ex",
		'it-it': "Glaceon-ex",
		'de-de': "Glaziola-ex",
		'pt-br': "Glaceon ex",
		'ko-kr': "글레이시아 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [471],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Snowy Terrain",
			'fr-fr': "Terrain Enneigé",
			'es-es': "Campo Níveo",
			'it-it': "Terreno Innevato",
			'de-de': "Schneefeld",
			'pt-br': "Terreno Nevado",
			'ko-kr': "스노 필드"
		},

		effect: {
			'en-us': "During Pokémon Checkup, if this Pokémon is in the Active Spot, do 10 damage to your opponent's Active Pokémon.",
			'fr-fr': "Pendant le Contrôle Pokémon, si ce Pokémon est sur le Poste Actif, infligez 10 dégâts au Pokémon Actif de votre adversaire.",
			'es-es': "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, inflige 10 puntos de daño al Pokémon Activo de tu rival.",
			'it-it': "Durante il controllo Pokémon, se questo Pokémon è in posizione attiva, infliggi 10 danni al Pokémon attivo del tuo avversario.",
			'de-de': "Wenn dieses Pokémon beim Pokémon-Check in der Aktiven Position ist, füge dem Aktiven Pokémon deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Durante o Checape Pokémon, se este Pokémon estiver no Campo Ativo, cause 10 pontos de dano ao Pokémon Ativo do seu oponente.",
			'ko-kr': "이 포켓몬이 배틀필드에 있는 한, 포켓몬 체크 때마다 상대의 배틀 포켓몬에게 10데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Freezing Wind",
			'fr-fr': "Vent Glaçant",
			'es-es': "Viento Gélido",
			'it-it': "Ventogelido",
			'de-de': "Polarwind",
			'pt-br': "Vento Gelado",
			'ko-kr': "프리즈윈드"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon ex",
		fr: "Givrali-ex",
		es: "Glaceon ex",
		it: "Glaceon-ex",
		de: "Glaziola-ex",
		'pt-br': "Glaceon ex",
		ko: "글레이시아 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Snowy Terrain",
			fr: "Terrain Enneigé",
			es: "Campo Níveo",
			it: "Terreno Innevato",
			de: "Schneefeld",
			'pt-br': "Terreno Nevado",
			ko: "스노 필드"
		},

		effect: {
			en: "During Pokémon Checkup, if this Pokémon is in the Active Spot, do 10 damage to your opponent's Active Pokémon.",
			fr: "Pendant le Contrôle Pokémon, si ce Pokémon est sur le Poste Actif, infligez 10 dégâts au Pokémon Actif de votre adversaire.",
			es: "Durante el Chequeo Pokémon, si este Pokémon está en el Puesto Activo, inflige 10 puntos de daño al Pokémon Activo de tu rival.",
			it: "Durante il controllo Pokémon, se questo Pokémon è in posizione attiva, infliggi 10 danni al Pokémon attivo del tuo avversario.",
			de: "Wenn dieses Pokémon beim Pokémon-Check in der Aktiven Position ist, füge dem Aktiven Pokémon deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Durante o Checape Pokémon, se este Pokémon estiver no Campo Ativo, cause 10 pontos de dano ao Pokémon Ativo do seu oponente.",
			ko: "이 포켓몬이 배틀필드에 있는 한, 포켓몬 체크 때마다 상대의 배틀 포켓몬에게 10데미지를 준다."
		}
	}],

	attacks: [{
		name: {
			en: "Freezing Wind",
			fr: "Vent Glaçant",
			es: "Viento Gélido",
			it: "Ventogelido",
			de: "Polarwind",
			'pt-br': "Vento Gelado",
			ko: "프리즈윈드"
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
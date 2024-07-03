import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Roaring Moon ex",
		fr: "Rugit-Lune-ex",
		es: "Bramaluna ex",
		it: "Lunaruggente-ex",
		pt: "Lua Estrondo ex",
		de: "Donnersichel-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Frenzied Gouging",
			fr: "Percée Frénétique",
			es: "Excavación Frenética",
			it: "Frenesquarcio",
			pt: "Arrancada Frenética",
			de: "Fieberhaftes Ausstechen"
		},

		effect: {
			en: "Knock Out your opponent's Active Pokémon. If your opponent's Active Pokémon is Knocked Out in this way, this Pokémon does 200 damage to itself.",
			fr: "Mettez K.O. le Pokémon Actif de votre adversaire. Si le Pokémon Actif de votre adversaire est mis K.O. de cette façon, ce Pokémon s'inflige 200 dégâts.",
			es: "Deja Fuera de Combate al Pokémon Activo de tu rival. Si el Pokémon Activo de tu rival queda Fuera de Combate de esta manera, este Pokémon se hace 200 puntos de daño a sí mismo.",
			it: "Metti KO il Pokémon attivo del tuo avversario. Se il Pokémon attivo del tuo avversario viene messo KO in questo modo, questo Pokémon infligge 200 danni a se stesso.",
			pt: "Nocauteie o Pokémon Ativo do seu oponente. Se o Pokémon Ativo do seu oponente tiver sido Nocauteado desta forma, este Pokémon causará 200 pontos de dano a si mesmo.",
			de: "Mache das Aktive Pokémon deines Gegners kampfunfähig. Wenn das Aktive Pokémon deines Gegners auf diese Weise kampfunfähig wird, fügt dieses Pokémon sich selbst 200 Schadenspunkte zu."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Calamity Storm",
			fr: "Tempête Calamiteuse",
			es: "Tormenta Calamitosa",
			it: "Tempesta Disastrosa",
			pt: "Tempestade Calamitosa",
			de: "Unheilvoller Sturm"
		},

		effect: {
			en: "You may discard a Stadium in play. If you do, this attack does 120 more damage.",
			fr: "Vous pouvez défausser un Stade en jeu. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Puedes descartar 1 Estadio en juego. Si lo haces, este ataque hace 120 puntos de daño más.",
			it: "Puoi scartare una carta Stadio in gioco. Se lo fai, questo attacco infligge 120 danni in più.",
			pt: "Você pode descartar um Estádio em jogo. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			de: "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
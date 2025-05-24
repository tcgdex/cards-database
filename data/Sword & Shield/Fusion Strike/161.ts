import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [862],
	set: Set,

	name: {
		en: "Galarian Obstagoon",
		fr: "Ixon de Galar",
		es: "Obstagoon de Galar",
		it: "Obstagoon di Galar",
		pt: "Obstagoon de Galar",
		de: "Galar-Barrikadax"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Linoone",
		fr: "Linéon de Galar",
		es: "Linoone de Galar",
		it: "Linoone di Galar",
		pt: "Linoone de Galar",
		de: "Galar-Geradaks"
	},

	stage: "Stage2",
	retreat: 2,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		en: "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Silence",
			fr: "Silence",
			de: "Stummschalten",
			es: "Silenciar",
			pt: "Silenciar",
			it: "Silenzio"
		},

		damage: 30,

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen.",
			es: "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo."
		}
	}, {
		cost: ["Darkness"],

		name: {
			en: "Merciless Strike",
			fr: "Impact Impitoyable",
			de: "Gnadenloser Schlag",
			es: "Golpe Despiadado",
			pt: "Golpe Impiedoso",
			it: "Colpo Implacabile"
		},

		damage: "60+",

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 90 danni in più."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card

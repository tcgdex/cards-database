import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Vulpix VSTAR",
		fr: "Goupix d'Alola VSTAR",
		es: "Vulpix de Alola V-ASTRO",
		it: "Vulpix di Alola V ASTRO",
		pt: "Vulpix de Alola V-ASTRO",
		de: "Alola Vulpix-VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],

	evolveFrom: {
		en: "Alolan Vulpix V",
		fr: "Goupix d'Alola-V",
		es: "Vulpix de Alola V",
		it: "Vulpix di Alola-V",
		pt: "Vulpix de Alola V",
		de: "Alola-Vulpix-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Snow Mirage",
			fr: "Mirage Neigeux",
			es: "Espejismo Nevado",
			it: "Miraggio Nevoso",
			pt: "Miragem Nevada",
			de: "Schnee-Illusion"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par les attaques de Pokémon ayant un talent.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival. Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon que tengan una habilidad.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon che hanno un'abilità.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon que tiverem uma Habilidade.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert. Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon zugefügt wird, die eine Fähigkeit haben."
		},

		damage: 160
	}, {
		name: {
			en: "Silvery Snow Star",
			fr: "Neige Argentée Star",
			es: "Astro Nieve Plateada",
			it: "Astro Neveargento",
			pt: "Neve Prateada Astral",
			de: "Silberner Schneestern"
		},

		effect: {
			en: "This attack does 70 damage for each of your opponent's Pokémon V in play. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 70 dégâts pour chacun des Pokémon-V en jeu de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 70 puntos de daño por cada uno de los Pokémon V en juego de tu rival. Este daño no se ve afectado por Debilidad o Resistencia. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 70 danni per ogni Pokémon-V in gioco del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 70 pontos de dano para cada Pokémon V do seu oponente em jogo. Este dano não é afetado por Fraqueza ou Resistência (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Diese Attacke fügt für jedes Pokémon-V deines Gegners im Spiel 70 Schadenspunkte zu. Dieser Schaden wird durch Schwäche und Resistenz nicht verändert. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682076,
		tcgplayer: 451667
	}
}

export default card

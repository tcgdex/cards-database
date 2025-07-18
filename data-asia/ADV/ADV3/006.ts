import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Shedinja",
         ja: "Shedinja",
         fr: "Shedinja",
         de: "Shedinja",
         es: "Cobertizo",
         it: "Shedinja",
         pt: "Shedinja",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [292],
      hp: 30,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Wonder Guard",
            ja: "ワンダーガード",
            fr: "Émerveillement",
            de: "Wundergarde",
            es: "Asombro",
            it: "Wonder Guard",
            pt: "Guarda maravilha",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved PokÃ©mon and PokÃ©mon-ex.",
            ja: "対戦相手の進化したポカモンとポカモンエクスによってシェディンジャに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Shedinja par les pokã © lun et Pokã © de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die Shedinja durch den entwickelten Poké Mon und Poké Mon-EX Ihres Gegners angerichtet haben.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Shedinja por la evolucionada Poké de su oponente y Poké Mon-Ex.",
            it: "Prevenire tutti gli effetti degli attacchi, inclusi i danni, fatti a Shedinja dal poké evoluto del tuo avversario e Poké mon-ex.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados a Shedinja pelo Poké Mon e Poké Mon-Ex.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Damage Curse",
            ja: "ダメージの呪い",
            fr: "Malédiction des dégâts",
            de: "Schaden des Fluches",
            es: "Maldición de daño",
            it: "Maledizione del danno",
            pt: "Maldição de danos",
          },
          effect: {
            en: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokemon.",
            ja: "1ダメージカウンターに加えて、ディフェンディングポケモンにシェディンジャの各ダメージカウンターに1つのダメージカウンターを入れます。",
            fr: "Mettez 1 compteur de dégâts, plus 1 compteur de dégâts supplémentaires pour chaque compteur de dégâts sur Shedinja, sur le Pokémon en défense.",
            de: "Legen Sie 1 Schadenschalter plus 1 weitere Schadenschalter für jeden Schadenschalter auf Shedinja auf dem verteidigenden Pokémon.",
            es: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokemon.",
            it: "Metti 1 contatore di danni, più 1 contatore di danni per ciascun contatore di danni su Shedinja, sul Pokemon in carica.",
            pt: "Coloque 1 contador de danos, além de mais 1 contador de danos para cada contador de danos em Shedinja, no Pokémon atual.",
          },
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

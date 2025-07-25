import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Dustox ex",
         ja: "Dustox Ex",
         fr: "Dustox Ex",
         de: "Dustox Ex",
         es: "DUSTOX EX",
         it: "Duspox Ex",
         pt: "DUSTOX EX",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [269],
      hp: 140,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Safeguard",
            ja: "保護",
            fr: "Sauvegarde",
            de: "Sichern",
            es: "Salvaguardia",
            it: "Salvaguardia",
            pt: "Salvaguarda",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done to Dustox ex by your opponent's PokÃ©mon-ex.",
            ja: "対戦相手のPokã©Mon-ExによってDustox Exに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés à Dustox Ex par le poké de votre adversaire.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die durch die Poké Mon-EX Ihres Gegners an Dustox EX ausgeführt werden.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado a Docox EX por el Poké de su oponente Mon-Ex.",
            it: "Prevenire tutti gli effetti degli attacchi, incluso il danno, fatto a Duspox ex dal Poké Mon-ex dell'avversario.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados ao Dustox EX pelo Poké Mon-Ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Silver Wind",
            ja: "銀風",
            fr: "Vent d'argent",
            de: "Silberwind",
            es: "Viento plateado",
            it: "Vento d'argento",
            pt: "Vento de prata",
          },
          effect: {
            en: "During your next turn, if an attack does damage to the Defending Pokemon (after applying Weakness and Resistance), that attack does 30 more damage.",
            ja: "次のターン中に、攻撃が防御ポケモンにダメージを与えた場合（脱力感と抵抗を適用した後）、その攻撃はさらに30のダメージを与えます。",
            fr: "Au cours de votre prochain tour, si une attaque endommage le Pokémon en défense (après avoir appliqué une faiblesse et une résistance), cette attaque fait 30 dégâts supplémentaires.",
            de: "Wenn Sie in Ihrer nächsten Kurve ein Angriff auf das verteidigende Pokémon schämen (nach der Anwendung von Schwäche und Widerstand), verursacht dieser Angriff 30 weitere Schäden.",
            es: "Durante su próximo turno, si un ataque da daño al Pokémon defensor (después de aplicar debilidad y resistencia), ese ataque hace 30 daños más.",
            it: "Durante il turno successivo, se un attacco infligge danni al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza), quell'attacco fa altri 30 danni.",
            pt: "Durante o seu próximo turno, se um ataque causar danos aos Pokémon defensores (após aplicar fraqueza e resistência), esse ataque causa mais 30 danos.",
          },
          damage: 40,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Cutting Wind",
            ja: "風を切る",
            fr: "Vent de coupe",
            de: "Wind schneiden",
            es: "Viento cortante",
            it: "Taglio del vento",
            pt: "Vento de corte",
          },
          damage: 70,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};

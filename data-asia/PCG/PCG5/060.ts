import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Aerodactyl",
         ja: "アエロダクチル",
         fr: "Aérodactyle",
         de: "Aerodactyl",
         es: "Aerodactil",
         it: "Aerodattilo",
         pt: "Aerodactyl",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [142],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reactive Protection",
            ja: "反応性保護",
            fr: "Protection réactive",
            de: "Reaktiver Schutz",
            es: "Protección reactiva",
            it: "Protezione reattiva",
            pt: "Proteção reativa",
          },
          effect: {
            en: "Any damage done to Aerodactyl by attacks from your opponent's PokÃ©mon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
            ja: "対戦相手のPokã©Monからの攻撃によってAerodactylに与えられた損傷は、Aerodactylに取り付けられた各Reactエネルギーカードに対して（脱力感と抵抗を適用した後）10削減されます。",
            fr: "Tout dommage causé à l'aérodactyle par les attaques du pokã © mon de votre adversaire est réduit de 10 pour chaque carte d'énergie React attachée à l'aérodactyle (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden an Aerodactyl durch Angriffe aus dem Poké Mon Mon Mons von Ihrem Gegner werden für jede an Aerodactyl befestigte React -Energiekarte (nach Auftragen von Schwäche und Widerstand) um 10 reduziert.",
            es: "Cualquier daño causado a aerodactyl por ataques del Poké Mon de su oponente se reduce en 10 por cada tarjeta de energía React unida a aerodactil (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno causato all'aerodattilo dagli attacchi del poké del tuo avversario è ridotto di 10 per ogni carta di energia di reazione attaccata ad aerodattilo (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado ao aerodáctilo por ataques do Poké Mon do seu oponente é reduzido em 10 para cada cartão de energia do React conectado ao aerodáctilo (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Power Blow",
            ja: "パワーブロー",
            fr: "Coup de courant",
            de: "Kraftschläge",
            es: "Golpe de poder",
            it: "Potenza",
            pt: "Golpe de poder",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.",
            ja: "アエロダクチルに付着した各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée à l'aérodactyle.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an Aerodactyl angeschlossene Energie.",
            es: "Hace 10 daños más 10 daños más por cada energía unida a aerodactyl.",
            it: "Fa 10 danni più 10 danni in più per ciascuna energia attaccata ad aerodattilo.",
            pt: "10 danos mais 10 mais danos para cada energia ligada ao aerodáctilo.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Speed Stroke",
            ja: "スピードストローク",
            fr: "Accélérer",
            de: "Geschwindigkeitshub",
            es: "Accidente cerebrovascular",
            it: "Corsa di velocità",
            pt: "Speed Stroke",
          },
          effect: {
            en: "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokemon-ex.",
            ja: "対戦相手の次のターン中に、対戦相手のポケモンエクスからの攻撃によってアエロダクチルに行われる損傷を含むすべての効果を防ぎます。",
            fr: "Au cours du prochain virage de votre adversaire, empêchez tous les effets, y compris les dégâts, effectués à l'aérodactyle par des attaques du Pokemon-Ex-EX de votre adversaire.",
            de: "Verhindern Sie während der nächsten Runde Ihres Gegners alle Effekte, einschließlich Schäden, die durch Angriffe aus dem Pokemon-EX Ihres Gegners durch Angriffe angerichtet werden.",
            es: "Durante el próximo turno de tu oponente, evita que todos los efectos, incluido el daño, se hagan a Aerodactyl mediante ataques de Pokemon-EX de tu oponente.",
            it: "Durante il prossimo turno del tuo avversario, impedire a tutti gli effetti, inclusi i danni, fatti ad aerodattilo dagli attacchi dal Pokemon-Ex del tuo avversario.",
            pt: "Durante o próximo turno do seu oponente, evite todos os efeitos, incluindo danos, causados ao aerodactyl por ataques do Pokemon-Ex do seu oponente.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};

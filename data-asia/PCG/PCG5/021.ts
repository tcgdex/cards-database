import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Tentacruel",
         ja: "テンタクルエル",
         fr: "Tentacruel",
         de: "Tentacruel",
         es: "Tentacruel",
         it: "Tentacruel",
         pt: "Tentacruel",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [73],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reactive Shield",
            ja: "反応シールド",
            fr: "Bouclier réactif",
            de: "Reaktiver Schild",
            es: "Escudo reactivo",
            it: "Scudo reattivo",
            pt: "Escudo reativo",
          },
          effect: {
            en: "As long as Tentacruel has any React Energy cards attached to it, prevent all effects, including damage, done to any of your Tentacruel in play by attacks from your opponent's PokÃ©mon-ex.",
            ja: "TentacruelにReact Energy Cardsが取り付けられている限り、対戦相手のPokã©Mon-Exからの攻撃によってプレイ中のTentacruelのいずれかに対して行われたダメージを含むすべての効果を防ぎます。",
            fr: "Tant que Tentacruel a des cartes d'énergie réagites qui y sont attachées, empêchez tous les effets, y compris les dégâts, causés à l'un de vos tentacruel en jeu par les attaques de la Poké de votre adversaire.",
            de: "Verhindern Sie, dass alle Effekte, einschließlich Schäden, an einem Ihrer Tentacruel im Spiel durch Angriffe aus dem Poké-Mon-ex von Tentacruel angewendet wird.",
            es: "Mientras Tentacruel tenga alguna tarjetas de energía reaccionadas unidas, eviten todos los efectos, incluido el daño, realizado a cualquiera de sus tentacruel en el juego por ataques del Poké de su oponente.",
            it: "Finché Tentacruel ha le carte di energia react attaccate ad esso, prevenire tutti gli effetti, inclusi i danni, eseguiti a uno qualsiasi dei tuoi Tentacruel in gioco dagli attacchi dal poké Mon-ex del tuo avversario.",
            pt: "Enquanto a Tentacruel tiver qualquer cartas de energia do React anexado a ele, evite todos os efeitos, incluindo danos, causados a qualquer um dos seus tentacrobros em jogo por ataques do Poké Mon-Ex do seu oponente.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Arrow",
            ja: "水の矢",
            fr: "Flèche d'eau",
            de: "Wasserpfeil",
            es: "Flecha de agua",
            it: "Freccia d'acqua",
            pt: "Seta de água",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 20 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Fury Strikes",
            ja: "フューリーストライク",
            fr: "Fury frappe",
            de: "Wutschläge",
            es: "Huelgas de furia",
            it: "Colpi di furia",
            pt: "Fury atinge",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

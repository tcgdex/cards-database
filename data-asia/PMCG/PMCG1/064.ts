import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Porygon",
         ja: "ポリゴン",
         fr: "Purygon",
         de: "Porygon",
         es: "Fisgón",
         it: "Porygon",
         pt: "Porygon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [137],
      hp: 30,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Conversion 1",
            ja: "変換1",
            fr: "Conversion 1",
            de: "Konvertierung 1",
            es: "Conversión 1",
            it: "Conversione 1",
            pt: "Conversão 1",
          },
          effect: {
            en: "If the Defending Pokemon has a Weakness, you may change it to a type of your choice other than Colorless.",
            ja: "防御するポケモンが弱点を持っている場合、それを無色の以外の選択の種類に変更することができます。",
            fr: "Si le Pokémon en défense a une faiblesse, vous pouvez le changer en un type de votre choix autre que incolore.",
            de: "Wenn das verteidigende Pokemon eine Schwäche hat, können Sie es in eine andere Art Ihrer Wahl als farblos ändern.",
            es: "Si el Pokémon defensor tiene una debilidad, puede cambiarlo a un tipo de su elección que no sea incoloro.",
            it: "Se il Pokemon in difesa ha una debolezza, puoi cambiarlo in un tipo di scelta diversa da incolore.",
            pt: "Se o Pokémon atual tiver uma fraqueza, você poderá alterá -lo para um tipo de sua escolha que não seja incolor.",
          },
          damage: None,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Conversion 2",
            ja: "変換2",
            fr: "Conversion 2",
            de: "Konvertierung 2",
            es: "Conversión 2",
            it: "Conversione 2",
            pt: "Conversão 2",
          },
          effect: {
            en: "Change Porygon's Resistance to a type of your choice other than Colorless.",
            ja: "Porygonの抵抗は、無色の以外の選択の種類に変更します。",
            fr: "Changer la résistance de Porygon en un type de votre choix autre que incolore.",
            de: "Ändern Sie den Widerstand von Porygon in eine andere Art Ihrer Wahl als farblos.",
            es: "Cambie la resistencia de Porygon a un tipo de su elección que no sea incoloro.",
            it: "Cambia la resistenza di Porygon a un tipo di scelta diversa da incolore.",
            pt: "Mude a resistência de Porygon a um tipo de sua escolha que não seja incolor.",
          },
          damage: None,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};

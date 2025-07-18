import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Geodude (Lv.13)",
         ja: "ブロックのジオドード（LV.13）",
         fr: "Brock's Geodude (LV.13)",
         de: "Brocks Geodude (Lv.13)",
         es: "Geodude de Brock (LV.13)",
         it: "Brock's Geodude (Lv.13)",
         pt: "Geodude de Brock (LV.13)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [74],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Call for Friend",
            ja: "友達を呼びます",
            fr: "Appeler un ami",
            de: "Rufen Sie nach Freund",
            es: "Llamar a un amigo",
            it: "Chiama per un amico",
            pt: "Ligue para o amigo",
          },
          effect: {
            en: "Flip a coin. If heads, you may search your deck for a Basic Pokemon card with Brock in its name and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
            ja: "コインをひっくり返します。頭の場合は、ブロックがその名にブロックされた基本的なポケモンカードを検索し、ベンチに置くことができます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
            fr: "Retourner une pièce. Si les têtes, vous pouvez rechercher votre jeu une carte Pokémon de base avec Brock en son nom et la mettre sur votre banc. Mélanger votre deck par la suite. (Vous ne pouvez pas utiliser cette attaque si votre banc est plein.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, können Sie Ihr Deck nach einer einfachen Pokemon -Karte mit Brock im Namen suchen und auf Ihre Bank legen. Mischen Sie anschließend Ihr Deck. (Sie können diesen Angriff nicht verwenden, wenn Ihre Bank voll ist.)",
            es: "Voltea una moneda. Si se dirige, puede buscar en su mazo una tarjeta Pokémon básica con Brock a su nombre y ponerla en su banco. Baraja tu mazo después. (No puedes usar este ataque si tu banco está lleno).",
            it: "Capovolgi una moneta. Se le teste, puoi cercare nel tuo mazzo una carta Pokemon di base con Brock nel suo nome e metterlo in panchina. Shuffle il tuo mazzo in seguito. (Non puoi usare questo attacco se la tua panchina è piena.)",
            pt: "Vire uma moeda. Se as cabeças, você poderá procurar um baralho básico de Pokemon com Brock em seu nome e colocá -lo em seu banco. Afaste seu baralho depois. (Você não pode usar este ataque se o seu banco estiver cheio.)",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Hook Shot",
            ja: "フックショット",
            fr: "Crow",
            de: "Hakenschuss",
            es: "Tiro de gancho",
            it: "Hook Shot",
            pt: "Tiro de gancho",
          },
          effect: {
            en: "Don't apply Resistance for this attack. (Any other effects that would happen after applying Resistance still happen.)",
            ja: "この攻撃に抵抗を適用しないでください。 （抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "N'appliquez pas de résistance pour cette attaque. (Tout autre effet qui se produirait après l'application de la résistance se produit.)",
            de: "Wenden Sie keinen Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung des Widerstands auftreten würden.)",
            es: "No aplique resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar la resistencia aún ocurre).",
            it: "Non applicare resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la resistenza ancora.)",
            pt: "Não aplique resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após a aplicação da resistência ainda acontecem.)",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};

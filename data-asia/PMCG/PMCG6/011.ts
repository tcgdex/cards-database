import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Kakuna",
         ja: "コガのカクナ",
         fr: "Kakuna de Koga",
         de: "Kogas Kakuna",
         es: "Kakuna de koga",
         it: "Kakuna di Koga",
         pt: "Koga's Kakuna",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [14],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Emerge",
            ja: "出現します",
            fr: "Émerger",
            de: "Auftauchen",
            es: "Surgir",
            it: "Emergere",
            pt: "Emerge",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, search your deck for an Evolution card named Koga's Beedrill and put it on Koga's Kakuna. (This counts as evolving Koga's Kakuna.) Shuffle your deck afterward. This power can't be used if Koga's Kakuna is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、コガのビードリルという名前の進化カードを探して、コガのカクナに置いてください。 （これは進化するコガのカクナとしてカウントされます。）その後、デッキをシャッフルします。 KogaのKakunaが眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, recherchez votre deck pour une carte d'évolution nommée Koga's Beedrill et mettez-la sur Kakuna de Koga. (Cela compte comme le kakuna de Koga en évolution.) Mélanger votre deck par la suite. Ce pouvoir ne peut pas être utilisé si le kakuna de Koga est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, suchen Sie Ihr Deck nach einer Evolutionskarte namens Kogas Beedrill und setzen Sie es auf Kogas Kakuna. (Dies gilt als sich entwickelnde Koga -Kakuna.) Mischen Sie danach Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Kogas Kakuna schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, busque en su mazo una tarjeta de evolución llamada Koga's Beedrill y póngalo en Kakuna de Koga. (Esto cuenta como la evolución del kakuna de Koga.) Arrastra tu mazo después. Este poder no se puede usar si la kakuna de Koga está dormida, confundida o paralizada.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, cerca nel tuo mazzo una carta di evoluzione di nome Koga's Beedrill e mettila sul Kakuna di Koga. (Questo conta come il kakuna di Koga in evoluzione.) Shuffle il tuo mazzo in seguito. Questo potere non può essere usato se Kakuna di Koga è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, procure seu baralho para obter uma carta de evolução chamada Koga's Beedrill e coloque -a no Kakuna de Koga. (Isso conta como evoluindo o Kakuna de Koga.) Descubra seu baralho depois. Esse poder não pode ser usado se o Kakuna de Koga estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Toxic Secretion",
            ja: "有毒な分泌",
            fr: "Sécrétion toxique",
            de: "Giftige Sekretion",
            es: "Secreción tóxica",
            it: "Secrezione tossica",
            pt: "Secreção tóxica",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。各プレイヤーのターン後（すでに毒されていたとしても）、20回ではなく20回の毒ダメージがかかります。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Il faut maintenant 20 dégâts de poison au lieu de 10 après le tour de chaque joueur (même s'il était déjà empoisonné).",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Nach jedem Spieler benötigt es jetzt 20 Giftschaden anstelle von 10 (auch wenn es bereits vergiftet war).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Ahora requiere 20 daños por veneno en lugar de 10 después del turno de cada jugador (incluso si ya estaba envenenado).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Ora ci vogliono 20 danni al veleno invece di 10 dopo il turno di ogni giocatore (anche se era già avvelenato).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Agora, são necessários 20 danos ao veneno em vez de 10 após a vez de cada jogador (mesmo que já estivesse envenenado).",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
